import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';

const ContactPage = () => {
  return (
    <div>
      <HeaderPage/>
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 text-lg">
          Get in touch with us for inquiries and support.
        </p>

        
        <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8 space-y-8 md:space-y-0">
          
          <div className="text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p>Email: <a href="mailto:info@sandalsstore.com" className="text-blue-600 hover:underline">info@gilsandalscollection.com</a></p>
            <p>Phone: <a href="tel:+639056782394" className="text-blue-600 hover:underline">+639056782394</a></p>
            <p>Address: San Carlos City, Philippines</p>
          </div>

          <div className="text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-600 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                placeholder="Your Message" 
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400" 
                rows="6"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-8 rounded-full hover:opacity-90">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ContactPage;
