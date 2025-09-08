import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../redux/slice/MovieSlice";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Detail = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state?.movie?.movie);
  const dispatch = useDispatch();

  const randomColors = ["emerald", "yellow", "red", "blue", "indigo"];
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  const randomColor = randomColors[randomIndex];

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  const [isOpen, setisOpen] = useState();

  return (
    <div className="my-10">
      {!movie ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-12 place-items-center gap-10">
            <div className="xl:col-span-8 md:col-span-6 col-span-12 group w-full lg:max-w-full lg:flex">
              <div className="flex flex-col justify-between leading-normal h-full">
                <div
                  className={`text-${randomColor}-700 text-8xl font-light mb-10 col-span-4`}>
                  {movie?.rating}
                </div>
                <div className="mb-8 col-span-6">
                  <div className="font-light text-6xl mb-10">
                    {movie?.title}
                  </div>
                  <p className="text-2xl mb-6">
                    {movie?.description}
                  </p>
                  <p>{movie?.year}</p>
                </div>
                <div className="flex items-center col-span-6">
                  <div className="text-sm">
                    <p className="leading-none mb-10 text-2xl font-light">
                      {movie.director}
                    </p>
                    <div className="my-2">
                      {movie &&
                        movie.length > 0 &&
                        movie?.genre.map((genre, index) => (
                          <span
                            key={index}
                            className={`me-1 mb-1 items-center bg-${randomColor}-50 px-2 py-1 text-xs font-medium text-${randomColor}-700`}>
                            {genre}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="my-10">
                  <button
                    onClick={() => setisOpen(true)}
                    className="bg-red-700 text-sm px-3 py-1">
                    Delete Movie
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 md:col-span-6 col-span-12">
              <img
                className=" transition duration-300 ease-in-out hover:scale-110"
                src={movie?.image}
                alt=""
              />
            </div>
          </div>
          {isOpen && <Modal close={() => setisOpen(false)} movie={movie} />}
        </div>
      )}
    </div>
  );
};

export default Detail;
