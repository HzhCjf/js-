import axios from 'axios'
let instance =axios.create({
    timeout:3000,
    baseURL:'/api'
})

export default instance