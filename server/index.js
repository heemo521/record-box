require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
const { identifyAlbum } = require("./gva");

const app = express();
let access_token;

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

var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.get("/auth/login", (req, res) => {
  var scope =
    "streaming \
               user-read-email \
               user-read-private";

  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: "http://localhost:3000/auth/callback",
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
});
app.get("/auth/callback", (req, res) => {
  var code = req.query.code;

  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      console.log(body.access_token);
      res.redirect("/");
    }
  });
});

app.get("/auth/token", (req, res) => {
  res.json({
    access_token: access_token,
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
