const TMDB_API_KEY =
 "c60c17f8bb2cd87ec35265aaf7d22db6";

export async function FetchMovieDetails(movieid) {
 try {
  const response = await fetch(
   `https://api.themoviedb.org/3/movie/${movieid}?api_key=${TMDB_API_KEY}`
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
export async function FetchMovie() {
 const options = {
  method: "GET",
  headers: {
   accept: "application/json",
   Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjBjMTdmOGJiMmNkODdlYzM1MjY1YWFmN2QyMmRiNiIsInN1YiI6IjY0ZmYxZjRiZGI0ZWQ2MTA0MzA4ODlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YTJsd0uCClr3QsG1e4KTeeFHMfVNLy9DmvZnBWY6JQg",
  },
 };

 try {
  const response = await fetch(
   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
   options
  );

  if (!response.ok) {
   throw new Error("NetWork Error,Reload!!");
  }

  const data = await response.json();
  const results = data.results;
  console.log(results);
  return results;
 } catch (error) {
  throw new Error(
   `Network Error, ${error.message}`
  );
 }
}
