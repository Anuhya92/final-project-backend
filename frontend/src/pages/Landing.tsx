import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  const { user, isLoggedIn } = useUser();

  return (
    <div className="flex flex-col items-center justify-center bg-[#D6D6D6] px-4">
      {isLoggedIn && (
        <div className="w-full max-w-4xl mb-8 p-6 bg-yellow-100 border-l-8 border-yellow-400 rounded-xl shadow text-center flex flex-col items-center">
          <h2 className="text-2xl font-extrabold text-yellow-900 mb-2 flex items-center justify-center gap-2">
            <span>Welcome back{user?.name ? `, ${user.name}` : ""}</span>{" "}
            <span>👋</span>
          </h2>
          <p className="text-gray-700 text-base">
            We're glad to see you again.{" "}
            <span className="italic text-yellow-700">
              Check out our latest cars below!
            </span>
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 my-12">
        {/* L1: Bestselling car section */}
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-xl shadow transition-all duration-300 transform hover:scale-105 hover:shadow-primary/50">
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
          <div className="relative overflow-hidden rounded-xl shadow transition-all duration-300 transform hover:scale-105 hover:shadow-primary/50">
            <img
              src="/l2.jpg"
              alt="New Arrival Car"
              className="w-80 h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <Link
            to="/webshop"
            className="mt-4 text-xl font-semibold text-alternate hover:text-secondary transition-colors duration-300"
          >
            Our new arrival car (Go to webshop)
          </Link>
        </div>
      </div>
      {/* ...rest of the page... */}
    </div>
  );
};

export default Landing;
