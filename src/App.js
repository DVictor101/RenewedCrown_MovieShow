import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/homepage/homePage";
import MovieDetails from "./components/movieDetails/movieDetails";

function App() {
 return (
  <div className="App">
   <Routes>
    <Route
     index="true"
     path="/"
     element={<HomePage />}
    />
    <Route
     path="/movies/:id"
     element={<MovieDetails />}
    />
   </Routes>
  </div>
 );
}

export default App;
