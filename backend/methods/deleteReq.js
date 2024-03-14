const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(__dirname, "../data/movies.json");
  const id = req.url.split("/")[3];

  if (req.url.startsWith("/api/movies") && id) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const foundIndex = data.movies.findIndex((m) => m.id == id);

      if (foundIndex === -1) {
        res.statusCode = 404;
        return res.end("Movie not found");
      }
      data.movies.splice(foundIndex, 1);

      fs.writeFileSync(filePath, JSON.stringify(data));
      res.statusCode = 204;

      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(data.movies));
    } catch (error) {
      console.error("Error:", error);
      res.statusCode = 500;
      return res.end("Internal Server Error");
    }
  } else {
    res.statusCode = 404;
    return res.end("Not Found");
  }
};
