const TMDB_API_KEY = "your_api_key_here";

export async function fetchMovieDetails(movieId) {
 try {
  const response = await fetch(
   `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
  );
  if (!response.ok) {
   throw new Error(
    "Failed to fetch movie details."
   );
  }
  const data = await response.json();
  return data;
 } catch (error) {
  throw new Error(`Error: ${error.message}`);
 }
}
