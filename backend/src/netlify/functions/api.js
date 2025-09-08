const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')

const getMoviesHandler = require('../../routes/getMovies')
const getMovieByIdHandler = require('../../routes/getMovieById')
const {upload, postMovieHandler} = require('../../routes/postMovie')
const deleteMovieHandler = require('../../routes/deleteMovie')

const app = express()
const PORT = process.env.PORT || 8888
const path = require('path')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://moviesaysgl.netlify.app']
    })
)
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')))

app.use((req, res, next) => {
    res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
    )
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    res.setHeader('Surrogate-Control', 'no-store')
    next()
})

// Routes
app.get('/movies', getMoviesHandler)
app.get('/movies/:id', getMovieByIdHandler)
app.post('/movies', upload.single('image'), postMovieHandler)
app.delete('/movies/:id', deleteMovieHandler)

// Local server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

// Serverless export
module.exports.handler = serverless(app)
