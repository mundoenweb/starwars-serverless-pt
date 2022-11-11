import axios from 'axios'
import { v4 } from 'uuid'

const key = 'c1118423c86c466291be3447abd15b64'
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'westus2'

export const helperTranstaleAzure = async (texts: any[]): Promise<any> => {
  const { data } = await axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      // location required if you're using a multi-service or regional (not global) resource.
      'Ocp-Apim-Subscription-Region': location,
      'Content-type': 'application/json',
      'X-ClientTraceId': v4().toString()
    },
    params: {
      'api-version': '3.0',
      from: 'en',
      to: ['es']
    },
    data: texts,
    responseType: 'json'
  })
  return data
}
