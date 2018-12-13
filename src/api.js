import axios from 'axios'

export const fetchAlubums = () => {
  return sendApiRequest('https://jsonplaceholder.typicode.com/albums')
}

export const fetchPhotos = () => {
  return sendApiRequest('https://jsonplaceholder.typicode.com/photos')
}

export const sendApiRequest = url => {
  return axios.get(url)
    .then(resp => {
      return resp.data
    })
    .catch(e => {
      console.log('ERROR', e)
    })
}
