import axios from 'axios'

const SLACK_API_CODE = process.env.SLACK_API_CODE
const API_URL = 'https://hooks.slack.com/services/'

export default function submitContact({
  company = '',
  name = '',
  email = '',
  tel = '',
  message = '',
}) {

  const url = API_URL + SLACK_API_CODE;
  const header = { 'Content-type': 'application/json' }
  const contacts = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${tel}\nメッセージ：${message}\n`
  const options = {
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
