const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 my-12">
        {/* L1: Bestselling car section */}
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-primary/50">
            <img
              src="/L1.jpg"
              alt="Bestselling Car"
              className="w-80 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="mt-4 text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
            Bestselling car for last 6 months
          </span>
        </div>
        {/* L2: New arrival car section */}
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-primary/50">
            <img
              src="/l2.jpg"
              alt="New Arrival Car"
              className="w-80 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <a
            href="#"
            className="mt-4 text-xl font-semibold text-alternate hover:text-secondary transition-colors duration-300"
          >
            Our new arrival car (Go to webshop)
          </a>
        </div>
      </div>
      {/* ...rest of the page... */}
    </div>
  );
};

export default Landing;