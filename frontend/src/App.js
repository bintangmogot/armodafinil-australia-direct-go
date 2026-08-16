import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './cart/CartContext';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Conditions from './pages/Conditions';
import ConditionDetail from './pages/ConditionDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQPage from './pages/FAQPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Checkout from './pages/Checkout';
import About from './pages/About';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import HowToOrder from './pages/HowToOrder';
import ShippingPolicy from './pages/ShippingPolicy';
import { Account } from './pages/StaticPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <TopBar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:catSlug" element={<CategoryDetail />} />
              <Route path="/category/:catSlug/:subSlug" element={<CategoryDetail />} />
              <Route path="/conditions" element={<Conditions />} />
              <Route path="/conditions/:slug" element={<ConditionDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-to-order" element={<HowToOrder />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              {/* Legacy fallbacks — redirect old paths */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/shipping" element={<ShippingPolicy />} />
              <Route path="/returns" element={<ReturnPolicy />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFab />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
