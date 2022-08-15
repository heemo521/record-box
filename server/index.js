const express = require("express");
const app = express();
// const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { identifyAlbum } = require("./gva");
app.use(cors());
//npm install body-parser --save
app.use(bodyParser.json());

// const router = express.Router();
// const vision = require("@google-cloud/vision");

app.use(express.json());

app.get("/api/album/gva/:img_id", (req, res) => {
  res.send("test");
});

app.post("/api/album/gva", (req, res) => {
  const data = req.body;
  //regex to replace album and cover with empty string
  identifyAlbum(data.url).then((result) => {
    const bestGuess = result[0].label;

    // regex for bestGuess to get album and cover from bestGuess
    const regex = /(album|cover)/g;
    const searchWord = bestGuess.replace(regex, "");
    console.log(searchWord);

    res.send(searchWord);
  });
});

// app.post("/api/image", (req, res) => {
//   const image = req.body.image;
//   const client = new vision.ImageAnnotatorClient();
//   const [result] = client.labelDetection(image);
//   const labels = result.labelAnnotations;
//   console.log("Labels:");
//   labels.forEach((label) => console.log(label.description));
//   res.send(labels);
// });

// app.get("/api/upload", (req, res) => {
// const image = req.body.image;
// const client = new vision.ImageAnnotatorClient();
// const [result] = client.labelDetection(image);
// const labels = result.labelAnnotations;
// console.log("Labels:");
// labels.forEach((label) => console.log(label.description));
// res.send(labels);
// });

// app.post("/api/search", (req, res) => {
//   const image = req.body.image;
//   const client = new vision.ImageAnnotatorClient();
//   const [result] = client.labelDetection(image);
//   const labels = result.labelAnnotations;
//   console.log("Labels:");
//   labels.forEach((label) => console.log(label.description));
//   res.send(labels);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
