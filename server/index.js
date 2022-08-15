const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const { identifyAlbum } = require("./gva");

app.use(cors());
app.use(bodyParser.json());

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
  console.log(data);
  identifyAlbum(data.url).then((result) => {
    const bestGuess = result[0].label;

    const regex = /(album|cover|vinyl|cd|lp)/g;
    const incorrectImage = !regex.test(bestGuess);

    if (incorrectImage) {
      return res.status(404).send("Not an album");
    }

    const searchWord = bestGuess.replace(regex, "");
    console.log(searchWord);

    res.send(searchWord);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
