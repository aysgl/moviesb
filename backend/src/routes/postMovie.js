const fs = require('fs')
const path = require('path')
const multer = require('multer')
const API =
    'http://localhost:5173' ||
    'http://localhost:8888' ||
    'https://moviesaysgl.netlify.app'

// Uploads folder
const UPLOADS_FOLDER = path.join(__dirname, '../uploads')
if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER, {recursive: true})
}

// Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_FOLDER),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
})

const upload = multer({storage})

// POST movie handler
const postMovieHandler = (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/movies.json')
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({error: 'Movies file not found'})
        }

        const moviesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

        const genreArray =
            typeof req.body.genre === 'string'
                ? req.body.genre.split(',').map(g => g.trim())
                : Array.isArray(req.body.genre)
                ? req.body.genre
                : []

        const newMovie = {
            id: Date.now().toString(),
            title: req.body.title || '',
            description: req.body.description || '',
            genre: genreArray,
            year: req.body.year || '',
            director: req.body.director || '',
            rating: req.body.rating || '',
            image: req.file ? `${API}/uploads/${req.file.filename}` : null
        }

        moviesData.movies.push(newMovie)
        fs.writeFileSync(filePath, JSON.stringify(moviesData, null, 2))

        return res.status(201).json(newMovie)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {upload, postMovieHandler}
