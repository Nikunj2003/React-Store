import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        const filteredProducts = data.filter(
          (product) =>
            product.category === "men's clothing" || product.category === "women's clothing"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (id, quantity) => {
    const cartIndex = cart.findIndex((product) => product.id === id);

    if (cartIndex === -1) {
      setCart((prevCart) => [...prevCart, { id, quantity }]);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) => {
          if (product.id === id)
            return { ...product, quantity: product.quantity + quantity };
          return product;
        })
      );
    }
  };

  const editCart = (id, quantity) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((product) => {
        if (product.id === id) return { ...product, quantity };
        return product;
      });

      return newCart.filter((entry) => entry.quantity > 0);
    });
  };

  const handleCheckout = () => {
    alert('Thanks for shopping with us!');
    setCart([]);
    navigate('/');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const isHome = location.pathname === '/';

  return (
    <div className={`App ${isHome && 'home'}`}>
      <Header isHome={isHome} onSearchChange={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={filteredProducts}
              addToCart={addToCart}
              showCart={!!cart.length}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              products={filteredProducts}
              editCart={editCart}
              handleCheckout={handleCheckout}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
