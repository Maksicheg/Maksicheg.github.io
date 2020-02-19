import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-pizza-maker.firebaseio.com/'
})

export default instance;