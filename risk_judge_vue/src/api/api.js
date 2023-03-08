import $http from './interceptor.js'


// Get请求地址


// Post请求地址
let testUrl = '/api/user/showUser' // 测试请求



// 请求方法
const apis = {
    getTest(data) {
        return $http.post(testUrl,{data:data})
    }
}

export default apis