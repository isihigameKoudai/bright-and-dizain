import axios from 'axios'

const SLACK_API_CODE = process.env.SLACK_API_CODE
const API_URL = 'https://hooks.slack.com/services/'

// type SubmitType = (company: String, name: String, email: String, tel: String, message: String) => Promise<T>;

export default function submitContact({
  company = '',
  name = '',
  email = '',
  tel = '',
  message = '',
}) {

  const url: string = API_URL + SLACK_API_CODE;
  const header: object = { 'Content-type': 'application/json' }
  const contacts: string = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${tel}\nメッセージ：${message}\n`
  const options: object = {
    method: 'post',
    baseURL: url,
    header,
    data: `payload={
      "channel": "#order-message",
      "username": "bnd",
      "text": "<!here> ${contacts}"
    }`
  }

  return axios(options);
}
