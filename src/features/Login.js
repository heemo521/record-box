import React from "react";

function Login() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=e5c7befa7a5b4f209ae1986b51868db3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

  return (
    <div className="App">
      <header className="App-header">
        <a className="btn-spotify" href={AUTH_URL}>
          Login with Spotify
        </a>
      </header>
    </div>
  );
}

export default Login;
