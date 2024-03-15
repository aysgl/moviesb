import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const randomColors = ["emerald", "yellow", "red", "blue", "indigo"];
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  const randomColor = randomColors[randomIndex];

  return (
    <Link to={`/${movie?.id}`} className="group w-full lg:max-w-full lg:flex ">
      <div className="bg-red-400 transition duration-300 ease-in-out hover:bg-white relative flex flex-col justify-between leading-normal h-full">
        <img
          className="img mix-blend-multiply w-full h-full transition duration-300 ease-in-out group-hover:scale-110 object-cover"
          src={movie?.image}
          alt="Sunset in the mountains"
        />
        <div className="absolute top-0 right-0">
          <div
            className={`w-[50px] h-[50px] text-center bg-${randomColor}-50 text-${randomColor}-700 p-3 m-2 rounded-full`}>
            {movie?.rating}
          </div>
        </div>

        <div className="h-full bg-white p-4 transition duration-300 ease-in-out group-hover:-translate-y-10">
          <div className="mb-8">
            <div className="text-gray-900 font-light text-2xl mb-2">
              {movie?.title}
            </div>
            <p className="text-gray-700 text-base">
              {movie?.description.slice(0, 90)}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{movie?.director}</p>
              <div className="my-2">
                {movie.genre &&
                  movie?.genre?.map((genre, index) => {
                    return (
                      <span
                        key={index}
                        className={`me-1 mb-1 items-center bg-${randomColor}-50 px-2 py-1 text-xs font-medium text-${randomColor}-700`}>
                        {genre}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
