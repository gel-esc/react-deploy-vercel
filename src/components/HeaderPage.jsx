import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 text-white py-4 px-8 shadow-md">
      <div className="flex justify-between items-center max-w-7xl h-10 mx-auto">
        <h1 className="text-lg font-bold">Gil Collection</h1>
        <nav>
          <ul className="flex space-x-4 text-lg font-medium">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
            <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/users" className="hover:underline">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPage;
