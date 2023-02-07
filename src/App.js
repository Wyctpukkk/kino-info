import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ItemPage } from './pages/ItemPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
