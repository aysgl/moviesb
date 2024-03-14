import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slice/MoviesSlice";
import Cards from "../components/Card";
import Hero from "../components/Hero";

const Main = () => {
  const movies = useSelector((state) => state?.movies?.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <Hero />

      {!movies ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default Main;
