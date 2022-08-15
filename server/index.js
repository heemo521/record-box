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

app.post("/api/records/:userId", (req, res) => {
  const body = req.body;
  const params = req.params;
  console.log(body);
  console.log(params);
  res.send("ok");
});

app.get("/api/album/gva/:img_id", (req, res) => {
  res.send("test");
});

app.post("/api/album/gva", (req, res) => {
  const data = req.body;

  identifyAlbum(data.url).then((result) => {
    const bestGuess = result[0].label;

    const regex = /(album|cover)/g;
    const incorrectImage = !regex.test(bestGuess);

    if (incorrectImage) {
      res.sendStatus(404);
    }

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
