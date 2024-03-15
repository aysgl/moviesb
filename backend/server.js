const http = require("http");
const cors = require("cors"); // cors paketini import edin

const postReq = require("./methods/postReq");
const deleteReq = require("./methods/deleteReq");
const getReq = require("./methods/getReq");

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    switch (req.method) {
      case "OPTIONS":
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, PATCH, OPTIONS"
        );
        res.end();
        break;
      case "GET":
        getReq(req, res);
        break;
      case "POST" || "OPTIONS":
        postReq(req, res);
        break;
      case "DELETE":
        deleteReq(req, res);
        break;
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ message: "Default" }));
        res.end();
    }
  });
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
