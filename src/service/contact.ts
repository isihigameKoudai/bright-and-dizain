import { AxiosPromise } from 'axios'
import { api } from 'utils/api';

const SLACK_API_CODE = process.env.SLACK_API_CODE

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
  const url: string = 'services/' + SLACK_API_CODE
  const contacts: string = `会社・組織：${company}\n名前：${name}\nEメール：${email}\n電話番号：${tel}\nメッセージ：${message}\n`

  return api.post(url, contacts)
}

