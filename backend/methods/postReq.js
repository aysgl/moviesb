const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

module.exports = async (req, res) => {
  const filePath = path.join(__dirname, "../data/movies.json");
  if (req.url === "/api/movies") {
    let body = await bodyParser(req);

    if (
      !body.title ||
      !body.year ||
      !body.genre ||
      !body.director ||
      !body.rating
    ) {
      res.statusCode = 400;
      res.end("Missing required fields");
      return;
    }
    body.id = crypto.randomUUID();

    const data = JSON.parse(fs.readFileSync(filePath));
    data.movies.push(body);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};
