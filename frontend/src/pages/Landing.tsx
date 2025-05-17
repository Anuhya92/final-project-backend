import React from 'react';

const Landing: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/option3.jpg')" }}
    >
      {/*  */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center drop-shadow-lg bg-black/40 px-6 py-2 rounded">
          Welcome to Our Project
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white text-center bg-black/30 px-4 py-2 rounded drop-shadow">
          This is the landing page.
        </p>
      </div>
    </div>
  );
};

export default Landing;