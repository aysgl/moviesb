const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/movies.json')

const getMovieByIdHandler = (req, res) => {
    try {
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({error: 'Movies dosyası bulunamadı'})
        }

        const movies = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const movie = movies.movies.find(m => m.id == req.params.id)

        if (movie) {
            return res.status(200).json(movie)
        } else {
            return res.status(404).json({error: 'Film bulunamadı'})
        }
    } catch (error) {
        console.error('GET isteği hatası:', error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = getMovieByIdHandler
