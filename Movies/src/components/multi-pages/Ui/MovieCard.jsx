import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Poster */}
      <img
        className="w-full h-64 object-cover"
        src={
          data.Poster !== "N/A"
            ? data.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={data.Title}
      />

      {/* Info */}
      <div className="flex-1 px-4 py-3">
        <h2 className="font-bold text-lg text-gray-900 truncate">
          {data.Title}
        </h2>
        <p className="text-gray-600">{data.Year}</p>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <NavLink
            to={`/movie/${data.imdbID}`}
            className="block text-center w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            🎬 Watch Now
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};
