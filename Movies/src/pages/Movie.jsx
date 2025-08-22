import { useLoaderData } from "react-router-dom";
import { Card } from "../components/multi-pages/Ui/Card";

export const Movie = () => {
  const Movies = useLoaderData();
  console.log(Movies);

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp5310730.jpg')", // Marvel background
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-70 p-6 rounded-xl">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-red-500 mb-6 text-center drop-shadow-lg">
          🎬 Marvel Movie Collection
        </h1>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Movies.Search.map((currentmovie) => (
            <Card key={currentmovie.imdbID} data={currentmovie} />
          ))}
        </div>
      </div>
    </div>
  );
};
