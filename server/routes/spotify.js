require("dotenv").config();

const spotifyRouter = require("express").Router();
const SpotifyWebApi = require("spotify-web-api-node");

spotifyRouter.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("refresh");

  const Spotify = new SpotifyWebApi({
    redirectUri: "http://192.168.0.113:3000",
    clientId: "e5c7befa7a5b4f209ae1986b51868db3",
    clientSecret: "f77dbfc013e04b29bc5304375147ea8f",
    refreshToken,
  });

  Spotify.refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

spotifyRouter.post("/login", (req, res) => {
  const code = req.body.code;
  console.log("login");
  const Spotify = new SpotifyWebApi({
    redirectUri: "http://192.168.0.113:3000",
    clientId: "e5c7befa7a5b4f209ae1986b51868db3",
    clientSecret: "f77dbfc013e04b29bc5304375147ea8f",
  });

  Spotify.authorizationCodeGrant(code)
    .then((data) => {
      console.log(data);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = spotifyRouter;
