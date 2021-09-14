import "./App.css";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import Movie from "./components/Movie";

import TvShow from "./components/TvShow";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <div id="movie">
        <Movie />
      </div>
      <div id="tvshow">
        <TvShow />
      </div>
    </div>
  );
}

export default App;
