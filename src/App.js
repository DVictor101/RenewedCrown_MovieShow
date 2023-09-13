import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/homepage/homePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

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
     element={<MovieDetailsPage />}
    />
   </Routes>
  </div>
 );
}

export default App;
