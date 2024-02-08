import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// const api_key = process.env.REACT_APP_YOUTUBE_API_KEY
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'cae1a0bb2emsh584f6586f95e746p13341cjsnb510d6259be1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
