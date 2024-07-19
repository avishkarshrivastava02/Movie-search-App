// src/api.js
export const fetchMovies = async (query) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    const movies = data.docs.slice(0, 10); // Limiting to 10 results
  
    const moviesWithDogImages = await Promise.all(
      movies.map(async (movie) => {
        const dogImage = await fetchDogImage();
        return { ...movie, dogImage };
      })
    );
  
    return moviesWithDogImages;
  };
  
  export const fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
  };
  