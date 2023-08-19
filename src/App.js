import './App.css';
import { Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import CategoriesContainer from './components/CategoriesContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="categories" element={<CategoriesContainer />} />
      </Routes>
    </div>

  );
}

export default App;