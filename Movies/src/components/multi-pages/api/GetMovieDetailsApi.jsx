

export const getMovieDetails = async ({params}) => {
    //but we cant access the params directly because its a function but you can access it using the useParams hook distructuring in an parameter
    //if it is a component then we can access it directly
    // const param = useParams(); this is wrong
    console.log(params);
    //movieid is the id of the movie
    //app.jsx have path /movie/:movieid
    const id = params.movieid;
   try {
        // Fetching data from the API
        // This is a sample API call to the OMDB API
        const response = await fetch(
            //apikey=910a0320 is my api key omdb website give me my api key on my mail id
            // in .env file we can store our api key VITE_API_KEY
            //i=${id} is the id of the movie
        `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
    );
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        // Parsing the JSON response
        // The response is expected to be in JSON format
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        throw error; // rethrow the error for further handling
    }
};