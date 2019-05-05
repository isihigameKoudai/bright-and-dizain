import axios from 'axios'

const SLACK_API_CODE = process.env.SLACK_API_CODE
const API_URL = 'https://hooks.slack.com/services/'

export default function submitContact( contactData = '' ) {
  
  const url = API_URL + SLACK_API_CODE;
  const header = { 'Content-type': 'application/json' }
  const options = {
    method: 'post',
    baseURL: url,
    header,
    data: `payload={
      "channel": "#order-message",
      "username": "bnd",
      "text": "<!here> ${contactData}"
    }`
  }

  return axios(options);
}
