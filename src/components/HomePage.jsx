import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 flex flex-col justify-center items-center text-white px-4">
      <header className="absolute top-10 w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Sandals Gil Collection</h1>
      </header>
      <div className="flex flex-col items-center mt-32">
        <p className="text-center text-lg sm:text-xl">
          Discover our stylish collection.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-white text-pink-500 px-6 py-3 rounded-full text-lg hover:bg-pink-100 transition duration-300"
        >
          Explore Products
        </button>
      </div>
      <footer className="absolute bottom-7 w-full text-center">
        <p>&copy; 2024 Sandals Gil Collection</p>
      </footer>
    </div>
  );
};

export default HomePage;
