import { useEffect } from "react";
import { fetchMovies } from "../redux/slice/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const movies = useSelector((state) => state?.movies?.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="my-10 text-center mb-20">
      <h1 className="text-6xl font-light mb-5">Welcome</h1>
      <p className="text-4xl font-light mb-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      {/* <div className="group grid md:grid-cols-10 grid-cols-5 mb-10">
        {movies &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="transition duration-300 ease-in-out transform hover:scale-110">
              <div className="bg-red-500 overflow-hidden">
                <img
                  className="mix-blend-multiply w-full h-full transition duration-300 ease-in-out"
                  src={movie.image}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
          ))}
      </div> */}

      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="transition duration-500 ease-in-out text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
