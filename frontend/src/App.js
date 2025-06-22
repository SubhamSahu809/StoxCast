import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import LoginPage from './landing_page/signup/LoginPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import Home from './dashboard/Home';
import './dashboard/dashboard.css'; // Assuming you have some global styles

const App = () => {
  const location = useLocation();

  // Check if current route starts with "/dashboard"
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className="route-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/dashboard/*" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isDashboard && <Footer />}
    </>
  );
};

export default App;
