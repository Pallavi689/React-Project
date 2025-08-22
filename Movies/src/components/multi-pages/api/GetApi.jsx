export const getApi = async () => {
    try {
        // Fetching data from the API
        // This is a sample API call to the OMDB API
        const response = await fetch(
            //apikey=910a0320 is my api key omdb website give me my api key on my mail id
            // in .env file we can store our api key VITE_API_KEY
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers`
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
}

