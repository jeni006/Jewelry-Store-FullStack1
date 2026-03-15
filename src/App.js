
import './App.css';
import CategoryPage from './CategoryPage';
import Navigation from './components/Navbar';
import BookingList from './BookingList';
import BookingPage from './BookingPage';
import CartPage from './CartPage';
import ProductDetails from './ProductDetails';
import ProductsPage from './ProductsPage';
import HomePage from './HomePage';
import LoginPage from './components/LoginPage';
import { CartProvider } from "./components/CartContext";
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
      <CartProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />      
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductDetails />} />
           <Route path="/product-page" element={<ProductsPage />} />
           <Route path="/cart" element={<CartPage />} />
           <Route path="/booking" element={<BookingList />} />
           <Route path="/bookings" element={<BookingPage />} />
        </Routes>
      </Router>

      </CartProvider>

   
  );
}


export default App;
