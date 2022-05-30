import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSongs={setCurrentSongs}
            song={song}
            key={song.id}
            id={song.id}
            audio
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
