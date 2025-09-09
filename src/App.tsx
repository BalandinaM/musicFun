import "./App.css";

const tracks = [
    {
      id: 1,
      title: "Musicfun soundtrack",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      id: 2,
      title: "Musicfun soundtrack instrumental",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
      id: 3,
      title: "Musicfun soundtrack instrumental",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
      id: 4,
      title: "Musicfun soundtrack instrumental",
      url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
  ];

function App() {
  
  if (tracks === null) {
    return (
     <>
        <h1>Musicfun player</h1>
        <div>Загрузка....</div>
     </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musicfun player</h1>
        <div>Плейлист пуст</div>
      </>
    );
  }

  const selectedTrackId = 1

  return (
    <>
      <h1>Musicfun player</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} style={{ border: track.id === selectedTrackId ? "1px solid orange" : "none" }}>
            <div>{track.title}</div>
            <audio src={track.url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
