import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from'./components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/contact';
import About from './components/About';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/ecomerce-app" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products/product/:id' element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
