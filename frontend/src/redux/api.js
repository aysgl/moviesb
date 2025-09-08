// const API = import.meta.env.PROD ? '/api' : 'http://localhost:8888'
const API_URL =
    import.meta.env.PROD === 'development'
        ? 'http://localhost:8888'
        : '/.netlify/functions/api'

export default API_URL
