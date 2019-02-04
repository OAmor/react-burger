import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://burger-app-e051e.firebaseio.com/'
});

export default instance;