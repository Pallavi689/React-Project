import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://wallpapers.com/images/hd/movie-poster-background-p5qblffj7cvswl5g.jpg")`,
      }}
    >
      {/* Overlay to make text visible */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          🎬 Welcome to Movie Library
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Stream your favorite blockbusters, action hits, and timeless classics.
        </p>

        <Link
          to="/movie"
          className="px-8 py-3 bg-red-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-red-700 transition transform hover:scale-105"
        >
          🍿 Explore Movies
        </Link>
      </div>
    </div>
  );
};


