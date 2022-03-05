import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MovieList from "./MovieList";
//5eb3a714
const API_URL = "http://www.omdbapi.com?apikey=5eb3a714";
function App() {
  const [movie, setMovies] = useState([]);
  const [searchitem, setsearchitem] = useState();
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Action");
  }, []);
  return (
    <div className="App">
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>Movie List</h1>
      <input
        placeholder="Enter Movie Category"
        value={searchitem}
        onChange={(e) => setsearchitem(e.target.value)}
        style={{ height: "40px", marginBottom: "50px", padding: "5px" }}
      />
      <Button
        className="mx-1 btn btn-success"
        onClick={() => {
          searchMovies(searchitem);
        }}
      >
        Search
      </Button>

      {movie?.length > 0 ? (
        <div>
          {movie.map((item) => (
            <MovieList item={item} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
