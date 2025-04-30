const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/movies.json");
    const id = req.params.id; // Express route parameter

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const foundIndex = data.movies.findIndex((m) => m.id == id);

    if (foundIndex === -1) {
      return res.status(404).json({ error: "Movie not found" });
    }

    data.movies.splice(foundIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json(data.movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};