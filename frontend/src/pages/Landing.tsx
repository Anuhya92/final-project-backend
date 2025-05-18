import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <img
        src="/option3.jpg"
        alt="Landing"
        className="w-48 h-48 rounded-full object-cover shadow-lg mb-8"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
        Welcome to Our Project
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-alternate text-center">
        This is the landing page.
      </p>
    </div>
  );
};

export default Landing;