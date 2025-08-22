import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-black via-red-900 to-black 
                   rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row
                   border border-red-600"
      >
        {/* Poster Section */}
        <div className="md:w-1/3">
          <img
            className="w-full h-full object-cover"
            src={
              movieData.Poster !== "N/A"
                ? movieData.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movieData.Title}
          />
        </div>

        {/* Info Section */}
        <div className="md:w-2/3 p-6 space-y-4 text-white">
          <h1 className="text-3xl font-bold text-red-500 drop-shadow-md">
            {movieData.Title}
          </h1>
          <p className="text-gray-300 italic">
            {movieData.Genre} | {movieData.Runtime} | {movieData.Released}
          </p>

          <p className="text-gray-200">{movieData.Plot}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
            <p><span className="font-semibold text-red-400">Director:</span> {movieData.Director}</p>
            <p><span className="font-semibold text-red-400">Writer:</span> {movieData.Writer}</p>
            <p><span className="font-semibold text-red-400">Actors:</span> {movieData.Actors}</p>
            <p><span className="font-semibold text-red-400">Language:</span> {movieData.Language}</p>
            <p><span className="font-semibold text-red-400">Country:</span> {movieData.Country}</p>
            <p><span className="font-semibold text-red-400">Box Office:</span> {movieData.BoxOffice}</p>
            <p><span className="font-semibold text-red-400">Awards:</span> {movieData.Awards}</p>
            <p><span className="font-semibold text-red-400">Rated:</span> {movieData.Rated}</p>
          </div>

          {/* Ratings */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mb-2">Ratings</h2>
            <ul className="space-y-2">
              {movieData.Ratings?.map((rating, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-red-800/60 px-4 py-2 rounded-lg shadow-md border border-red-600"
                >
                  <span className="font-medium text-white">{rating.Source}</span>
                  <span className="text-yellow-300">{rating.Value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
