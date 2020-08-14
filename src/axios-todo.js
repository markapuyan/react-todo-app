import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-todo-app-da35f.firebaseio.com/'
})

export default instance