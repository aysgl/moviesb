const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8888;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://moviesaysgl.netlify.app'],
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS']
}));

// Import routes
const postReq = require("../methods/postReq");
const deleteReq = require("../methods/deleteReq");
const getReq = require("../methods/getReq");

// Routes
app.get('/api/movies', getReq);
app.post('/api/movies', postReq);
app.delete('/api/movies/:id', deleteReq);

// Start server if not in production
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export handler for Netlify Functions
module.exports.handler = serverless(app);