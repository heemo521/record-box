const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const spotifyRouter = require("./routes/spotify");
const googleRouter = require("./routes/google");

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/auth", spotifyRouter);
app.use("/api", googleRouter);

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
