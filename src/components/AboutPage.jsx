import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <HeaderPage />

      
      <div className="flex-grow p-8 space-y-8 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-gray-800">About Us</h2>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
        
          <div className="w-full lg:w-1/2">
            <img 
              src="/assets/b4.jpg" 
              alt="About our sandals collection" 
              className="rounded-lg shadow-md w-full h-auto lg:max-h-[600px] object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-700">Our Sandals Collection</h3>
            <p className="text-gray-600 text-lg">
              Welcome to our Sandals Collection, where style meets comfort. 
              We specialize in offering premium sandals designed to suit any occasion, 
              whether it's a casual outing, a beach day, or an evening party.
            </p>
            <p className="text-gray-600 text-lg">
              Our journey began with a passion for crafting footwear that blends elegance and durability. 
              From sleek kitten heels to strappy block heels, every pair is meticulously crafted using high-quality materials to ensure style, comfort, and longevity.
            </p>
            <p className="text-gray-600 text-lg">
              Thank you for choosing us as your go-to destination for fashionable sandals. 
              We are committed to providing you with footwear that not only looks great but also feels amazing every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default AboutPage;
