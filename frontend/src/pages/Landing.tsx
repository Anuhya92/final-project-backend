const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8">
        {/* L1: Bestselling car section */}
        <div className="flex flex-col items-center">
          <img
            src="/L1.jpg"
            alt="Bestselling Car"
            className="w-64 h-40 object-cover rounded-lg shadow-lg"
          />
          <span className="mt-2 text-lg font-semibold text-primary">
            Bestselling car for last 6 months
          </span>
        </div>
        {/* L2: New arrival car section */}
        <div className="flex flex-col items-center">
          <img
            src="/l2.jpg"
            alt="New Arrival Car"
            className="w-64 h-40 object-cover rounded-lg shadow-lg"
          />
          <a
            href="#"
            className="mt-2 text-lg font-semibold text-alternate underline hover:text-secondary"
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