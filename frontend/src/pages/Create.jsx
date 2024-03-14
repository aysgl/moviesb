import { useDispatch } from "react-redux";
import { fetchPostMovie } from "../redux/slice/MovieSlice";

const Create = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = Object.fromEntries(form.entries());
    console.log(data);
    dispatch(fetchPostMovie(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="mt-10 grid grid-cols-8 gap-6">
          <div className="col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:text-black focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Category
            </label>
            <div className="mt-2">
              <select
                name="category"
                className="block w-full rounded-md border-0 py-1.5 text-red-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-600 h-[38px] text-sm">
                <option>Action</option>
                <option>Adventure</option>
                <option>Crime</option>
                <option>Drama</option>
                <option>Fantasy</option>
                <option>History</option>
                <option>Horror</option>
                <option>Music</option>
                <option>Mystery</option>
                <option>Romance</option>
                <option>Science Fiction</option>
                <option>Thriller</option>
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Rating
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="rating"
                className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-200">
              Year
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="year"
                className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-200">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-black px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-200">
              Cover photo
            </label>
            <div className="bg-white mt-2 flex justify-center rounded-lg border border-dashed border-red-700 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-200">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Save
        </button>
      </div>
    </form>
  );
};

export default Create;
