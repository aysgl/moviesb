const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/movies.json')

const deleteMovieHandler = (req, res) => {
    try {
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({error: 'Movies dosyası bulunamadı'})
        }

        const movies = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        const movieId = req.params.id

        const filteredMovies = movies.movies.filter(m => m.id != movieId)

        movies.movies = filteredMovies

        fs.writeFileSync(filePath, JSON.stringify(movies, null, 2))

        return res.status(200).json({message: 'Film silindi', id: movieId})
    } catch (error) {
        console.error('DELETE isteği hatası:', error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = deleteMovieHandler
