import axios from 'axios'


const instance = axios.create({
  timeout: 10000
})

instance.interceptors.request.use(
  config => {
    config.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    }
    return config
  },
  err => {

  }
)


  instance.interceptors.response.use(
    response => {
      if (response.status == '200') {
        return response.data
      } else {
        return response.data.message
      }
    },
    err => {
      // console.log(err)
      // return message
    }
  )

  export default instance