import './App.css';

function App() {
  function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
  }
  
  const stars = Array.from({ length: 1000 }).map((_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: getRandomPosition(window.innerHeight),
        left: getRandomPosition(window.innerWidth),
        animationDelay: `${Math.random() * 10}s`
      }}
    />
  ));

  return (
    <div className="App">
      <div className="container">
      <div className="sun">
      <div className="mercury"></div>
      <div className="venus"></div>
      <div className="earth">
        <div className="moon"></div>  
      </div>
      <div className="mars"></div>
      <div className="jupiter"></div>
      <div className="saturn"></div>
      <div className="uranus"></div>
      <div className="neptune"></div>
      </div>
    </div>
    {stars}
    </div>
  );
}

export default App;
