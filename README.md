# Record Box
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/heemo521/record-box">
    <!-- ******************************************************************** -->
    <img src="https://i.imgur.com/MD2iUYf.gif" alt="Logo">
  </a>

  <h3 align="center">Record Box (music player) v 1.0 </h3>

  <p align="center">
    Record Box is a music player that allows the user to connect to their Spotify premium account to play their music on the browser. It has added functionality of image search using Google API. 
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
 <p align="start">
  The inspiration behind this project is the record shop. The problem is that it's not as easy to listen to music in a record shop because of the required setup to play records. This application can access the mobile device's camera and take pictures of an album. Google's Vision API will quite accurately analyze the photo and make an automatic search to the Spotify API, then you are allow to play the music. Now you can walk in to your favorite record shop and listen to these albums just by taking a photo! Enjoy!
</p>

![Imgur](https://i.imgur.com/GqU4EX2.jpg)


### Tech Stack
<div align="start">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-MUI-blue)
![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![GoogleAPI](https://img.shields.io/badge/Google-CCCCCC?style=for-the-badge&logo=google&logoColor=white)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

These are instructions on how to get started fast!

You need to have a premium spotify account to access the music player.
Also, create your Spotify developer account here [HERE!]([HERE!](https://developer.spotify.com/dashboard/applications))
and create an app for this project to get client id & client secret. This is optional and will not affect the 
gaming functionality.

### Installation

1. Go to [Spotify for Developers](https://developer.spotify.com/) and log in to your account on dashbord. Create an app and add your client url for redirect.

2. Update the .env file with your ID and Secret from Spotify.

3. Install NPM packages
   ```sh
   npm install
   ```
4. Run client and server each in its own terminal
   ```sh
    npm start
    npm run server
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
