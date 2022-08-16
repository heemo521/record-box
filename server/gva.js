const vision = require("@google-cloud/vision");
// require("dotenv").config();
const credentials = require("./CONFIG.js");

const CONFIG = {
  credentials: {
    private_key: credentials.private_key,
    client_email: credentials.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const identifyAlbum = async (img_url) => {
  const [result] = await client.webDetection(img_url);
  return result.webDetection.bestGuessLabels;
};

module.exports = {
  identifyAlbum,
};
