import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
