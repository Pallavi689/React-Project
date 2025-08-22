import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      whileTap={{ scale: 0.95 }}
      className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden 
                 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex flex-col"
    >
      {/* Poster with Gradient Overlay */}
      <div className="relative">
        <img
          className="w-full h-72 object-cover"
          src={
            data.Poster !== "N/A"
              ? data.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={data.Title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Year Badge */}
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
          {data.Year}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 px-4 py-3 text-white">
        <h2 className="font-bold text-lg truncate">{data.Title}</h2>
        
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <NavLink
            to={`/movie/${data.imdbID}`}
            className="block text-center w-full bg-gradient-to-r from-red-600 to-red-800 
                       hover:from-red-700 hover:to-red-900 text-white py-2 rounded-xl 
                       font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            🍿 Watch Now
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};
