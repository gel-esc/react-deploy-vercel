import React, { useState, useEffect } from 'react';
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';

// Fallback data
const fallbackProducts = [
  { id: 1, name: "Classic Heeled Sandals", price: 1200, description: "Timeless and elegant heeled sandals, perfect for any occasion.", src: "/assets/p1.jpg" },
  { id: 2, name: "Strappy Block Heels", price: 2500, description: "Stylish block heel sandals with strappy details for added charm.", src: "/assets/p2.jpg" },
  { id: 3, name: "Platform Wedge Sandals", price: 999, description: "Comfortable and chic platform wedges for all-day wear.", src: "/assets/n5.jpg" },
  { id: 4, name: "Ankle Strap Heels", price: 1800, description: "Sophisticated ankle-strap heeled sandals for formal and casual events.", src: "/assets/n6.jpg" },
  { id: 5, name: "Handcrafted Heel Sandals", price: 1500, description: "Unique handcrafted sandals with a subtle heel for a distinct look.", src: "/assets/p6.jpg" },
  { id: 6, name: "Minimalist Kitten Heels", price: 800, description: "Simple and sleek kitten heels for a minimalist style.", src: "/assets/p7.jpg" },
  { id: 7, name: "Eco-Friendly Heels", price: 650, description: "Sustainable and stylish heeled sandals made from eco-friendly materials.", src: "/assets/n1.jpg" },
  { id: 8, name: "Glam Evening Heels", price: 2200, description: "Sparkling and glamorous sandals with heels for evening parties.", src: "/assets/n2.jpg" },
  { id: 9, name: "Casual Slingback Heels", price: 1400, description: "Comfortable slingback sandals with heels for everyday wear.", src: "/assets/n3.jpg" },
];

const ProductPage = () => {
  const [products, setProducts] = useState(fallbackProducts); // Use fallback initially
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Cart state to store added products
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false); // State for checkout modal

  useEffect(() => {
    // Simulate fetching data from a fake API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('API fetch failed');
        }

        setProducts(updatedProducts);
      } catch (error) {
        console.warn('Failed to fetch products, using fallback data.');
        setProducts(fallbackProducts); // Use fallback products on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleProceedToCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleCloseModal = () => {
    setCheckoutModalOpen(false);
  };

  const handleConfirmPurchase = () => {
    alert('Thank you for your purchase!');
    setCart([]); // Clear the cart after purchase
    setCheckoutModalOpen(false); // Close the checkout modal
  };

  if (loading) {
    return (
      <div>
        <HeaderPage />
        <div className="p-8 flex items-center justify-center min-h-screen">
          <p className="text-xl">Loading products...</p>
        </div>
        <FooterPage />
      </div>
    );
  }

  return (
    <div>
      <HeaderPage />
      <div className="p-8 space-y-4">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        <p className="text-center">Browse our exclusive collection of Sandals.</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img 
                src={product.src} 
                alt={product.name} 
                className="w-full h-90 object-cover mb-4 rounded-lg" 
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-semibold mt-2">₱{product.price}</p>
              <button 
                onClick={() => handleAddToCart(product)} // Trigger handleAddToCart on click
                className="mt-4 bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-100 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Display Cart */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold">Your Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₱{item.price}</span>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div className="mt-4">
              <button
                onClick={handleProceedToCheckout}
                className="bg-indigo-500 text-white px-6 py-2 rounded-full">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
            <h3 className="text-2xl font-bold">Checkout Summary</h3>
            <ul className="mt-4 space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span>₱{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">Total: ₱{cart.reduce((total, item) => total + item.price, 0)}</span>
            </div>
            <div className="mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded-full mr-4">
                Cancel
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="bg-green-500 text-white px-4 py-2 rounded-full">
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterPage />
    </div>
  );
};

export default ProductPage;
