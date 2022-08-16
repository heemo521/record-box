const identifyAlbum = require("../utils/gva");
const googleRouter = require("express").Router();

googleRouter.use((req, res, next) => {
  console.log("Google router");
  next();
});

googleRouter.post("/records/:userId", (req, res) => {
  const body = req.body;
  const params = req.params;
  console.log(body);
  console.log(params);
  res.send("ok");
});

googleRouter.get("/album/gva/:img_id", (req, res) => {
  res.send("test");
});

googleRouter.post("/album/gva", (req, res) => {
  const data = req.body;

  identifyAlbum(data.url).then((result) => {
    const bestGuess = result[0].label;

    const regex = /(album|cover|vinyl|cd|lp)/g;
    const incorrectImage = !regex.test(bestGuess);

    if (incorrectImage) {
      return res.status(404).send("Not an album");
    }

    const searchWord = bestGuess.replace(regex, "");

    res.send(searchWord);
  });
});

module.exports = googleRouter;
