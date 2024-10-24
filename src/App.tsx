import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import { loadPokemonImages } from './services/pokeService';
import '../i18n';
import './App.css';

function App() {
  useEffect(() => {
    loadPokemonImages();
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
