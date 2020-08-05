import axios from 'axios';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=1a72b1e4&`,
});

export default api;
