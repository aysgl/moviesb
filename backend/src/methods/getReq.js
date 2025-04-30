const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const filePath = path.join(__dirname, "../data/movies.json");
  const id = req.url.split("/")[3];
  const baseUrl = req.url.substr(0, req.url.lastIndexOf("/"));

  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const movies = fs.readFileSync(filePath);
    res.end(movies);
  } else if (baseUrl === "/api/movies" && id) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const movies = JSON.parse(fs.readFileSync(filePath));
    const movie = movies.movies.find((m) => m.id == id);
    res.end(JSON.stringify(movie));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};
