const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/movies.json')

const getMoviesHandler = (req, res) => {
    try {
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({error: 'Movies dosyası bulunamadı'})
        }

        const movies = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        return res.status(200).json(movies)
    } catch (error) {
        console.error('GET isteği hatası:', error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = getMoviesHandler
