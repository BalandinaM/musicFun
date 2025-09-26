import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "ed0903f6-b8d9-453b-bc94-0934df440675",
      },
    })
      .then((res) => res.json())
      .then((json) => setTracks(json.data));
  }, []);

  if (tracks === null) {
    return (
      <>
        <h1>Musicfun player</h1>
        <div>Загрузка....</div>
      </>
    );
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musicfun player</h1>
        <div>Плейлист пуст</div>
      </>
    );
  }

  return (
    <>
      <h1>Musicfun player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
        }}
      >
        Сбросить выбор
      </button>
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{
              border:
                track.id === selectedTrackId ? "1px solid orange" : "none",
            }}
          >
            <div
              onClick={() => {
                setSelectedTrackId(track.id);
                fetch(
                  "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
                    track.id,
                  {
                    headers: {
                      "api-key": "ed0903f6-b8d9-453b-bc94-0934df440675",
                    },
                  }
                )
                  .then((res) => res.json())
                  .then((json) => {
                    setSelectedTrack(json.data);
                  });
              }}
            >
              {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        ))}
      </ul>
      <div>
        <h3>Детали</h3>
        {selectedTrack === null ? (
          "Track is not selected"
        ) : (
          <div>
            <h3>{selectedTrack.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
