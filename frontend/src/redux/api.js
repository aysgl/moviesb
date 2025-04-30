const API = import.meta.env.PROD
    ? 'https://moviesaysgl.netlify.app/.netlify/functions/api'
    : 'http://localhost:8888/.netlify/functions/api';

export default API;

// https://moviesaysgl.netlify