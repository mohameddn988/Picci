import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FullCatalogPage from './pages/FullCatalogPage';
import BarbershopPage from './pages/BarbershopPage';
import CarwashPage from './pages/CarwashPage';
import CarsPage from './pages/CarsPage';
import MechanicPage from './pages/MechanicPage';
import FinancementPage from './pages/FinancementPage';
import TctPage from './pages/TctPage';
// import ProductsPage from './pages/ProductsPage';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<FullCatalogPage />} />
            <Route path="/cut/:id" element={<FullCatalogPage />} />
            <Route path="/barbershop" element={<BarbershopPage />} />
            <Route path="/carwash" element={<CarwashPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/mechanic" element={<MechanicPage />} />
            <Route path="/tct" element={<TctPage />} />
            <Route path="/financement" element={<FinancementPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
