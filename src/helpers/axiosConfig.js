import axios from 'axios'

const backendurl = process.env.REACT_APP_API || 'http://localhost:4000'

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  return headers
}

export default axios.create({
  baseURL: `${backendurl}/api/`,
  headers: getHeaders()
});
