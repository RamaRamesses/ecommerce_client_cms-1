import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-ibrhm-app.herokuapp.com/'
})

export default instance
