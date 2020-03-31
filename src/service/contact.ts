import axios, { AxiosPromise } from 'axios'

const SLACK_API_CODE = process.env.SLACK_API_CODE
const API_URL: string = 'https://hooks.slack.com/services/'
const HOST_URL: string = 'https://www.brightanddizain.com/'

interface SubmitType {
  name: string
  email: string
  tel: string
  company: string
  message: string
}

export const submitContact = ({
  name,
  email,
  tel,
  company,
  message
}): AxiosPromise<SubmitType> => {
  const url: string = API_URL + SLACK_API_CODE
  const header: object = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': HOST_URL
  }
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

  return axios(options)
}

