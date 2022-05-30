import React, { useState } from "react";
//Import Styles
import "./style/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Import data
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSongs, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, SetIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSongs={currentSongs} />
      <Player
        isPlaying={isPlaying}
        SetIsPlaying={SetIsPlaying}
        currentSongs={currentSongs}
      />
      <Library songs={songs} setCurrentSongs={setCurrentSongs} />
    </div>
  );
}

export default App;
