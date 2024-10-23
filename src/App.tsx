import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import { cacheImage, loadPokemonImages } from './services/pokeService';
import { difficutlyImg } from './utils/utils';

function App() {
  useEffect(() => {
    loadPokemonImages();
    Object.values(difficutlyImg).forEach((img) => {
      cacheImage(img);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
