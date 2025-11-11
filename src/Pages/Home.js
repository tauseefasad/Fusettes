import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section className="w-full h-screen snap-start">
        <Hero />
      </section>

      {/* About Us Section */}
      <section className="w-full h-screen snap-start bg-mcm-light text-gray-800 flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-light mb-4 tracking-wide">
          Welcome to Fusettes Café
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-center mb-8">
          Where passion meets flavor. Whether you’re here for your morning latte,
          an afternoon chat, or a moment of calm, our café blends ambiance,
          aroma, and artistry into every cup.
        </p>

        {/* About Us Button */}
        <Link
          to="/about"
          className="bg-mcm-dark text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-mcm-accent hover:shadow-lg transition-all duration-300"
        >
          Learn More About Us
        </Link>
      </section>

      {/* Top Reviews Section */}
<section className="w-full h-screen snap-start bg-beige text-gray-800 flex flex-col justify-center items-center p-10">
  <h2 className="text-4xl font-light mb-10 tracking-wide">Top Reviews</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
    {/* Review 1 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/assets/review1.jpg"
        alt="Customer 1"
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Sophie L.</h3>
      <p className="text-gray-600 italic">
        “The best latte I’ve ever had — cozy ambiance and amazing service!”
      </p>
    </div>

    {/* Review 2 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/assets/review2.jpg"
        alt="Customer 2"
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Marcus D.</h3>
      <p className="text-gray-600 italic">
        “A hidden gem in Toronto. Their croissants and cappuccinos are perfect.”
      </p>
    </div>

    {/* Review 3 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img
        src="/assets/review3.jpg"
        alt="Customer 3"
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Aroma Toronto</h3>
      <p className="text-gray-600 italic">
        “Fusettes brings elegance to café culture — truly one of the city’s finest.”
      </p>
    </div>
  </div>
</section>


      {/* Contact Us Section */}
      <section className="w-full h-screen snap-start bg-mcm-dark text-black flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-light mb-6 tracking-wide">Contact Us</h2>
        <p className="max-w-2xl text-center mb-8">
          Have questions or want to reach out? Fill the form below and we'll get back to you!
        </p>

        <form className="w-full max-w-lg bg-white text-gray-900 rounded-lg shadow-lg p-8 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mcm-light"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mcm-light"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mcm-light"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-mcm-light text-black font-medium rounded-md py-2 hover:bg-mcm-accent transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
