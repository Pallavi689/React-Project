import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black p-8">
      <div className="max-w-3xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center border border-red-600">
        
        <h1 className="text-5xl font-extrabold text-red-500 mb-6 tracking-widest">
          🦸 Marvel Movies Library
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Welcome to the <span className="font-bold text-red-400">Marvel Cinematic Universe (MCU)</span> collection!  
          Here you’ll find legendary movies from <span className="text-red-300">Iron Man</span>’s first flight  
          to the epic battles of <span className="text-red-300">Avengers: Endgame</span>.  
        </p>

        <p className="text-lg text-gray-300 mb-6">
          This library is dedicated to all Marvel fans 🕷️⚡🛡️ —  
          whether you love heroes like <span className="font-semibold">Spider-Man, Captain America, Thor, Black Panther, or Doctor Strange</span>,  
          you can explore their journeys here in one place.  
        </p>

        <p className="text-md text-gray-400 italic">
          “Part of the journey is the end.” – Tony Stark
        </p>
      </div>
    </div>
  );
};


