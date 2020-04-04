import axios, { AxiosInstance } from 'axios';

const API_URL: string = 'https://hooks.slack.com/'
const HOST_URL: string = 'https://www.brightanddizain.com/'

const headers: object = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': HOST_URL
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers
})
