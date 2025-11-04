import React from "react";
import heroVideo from "../assets/hero.mp4"; 
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <img src={logo} alt="Fusettes Logo" className="w-1/3 animate-fadeIn" />
        <h1 className="text-5xl font-bold mt-6 animate-fadeIn">Fusettes Café</h1>
        <p className="text-lg mt-4 max-w-md animate-fadeIn">
          Where timeless taste meets modern ambiance.
        </p>
      </div>
    </section>
  );
};

export default Home;
