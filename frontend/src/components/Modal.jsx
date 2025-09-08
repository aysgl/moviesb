import {useDispatch} from 'react-redux'
import {fetchDeleteMovie} from '../redux/slice/MovieSlice'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'

const Modal = ({movie, close}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        dispatch(fetchDeleteMovie(movie.id))
        navigate('/')
    }
    return (
        <div className="">
            <div className="fixed w-full h-full bg-black bg-opacity-75 right-0 left-0 top-0 bottom-0"></div>
            <div
                id="popup-modal"
                className="fixed flex justify-center items-center overflow-y-auto overflow-x-hidden z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white text-black shadow">
                        <button
                            type="button"
                            onClick={close}
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="popup-modal">
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="red"
                                viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only"></span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg
                                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal">
                                Are you sure you want to delete this{' '}
                                <span className="font-bold">
                                    &quot;{movie.title}&quot;
                                </span>{' '}
                                movie?
                            </h3>
                            <button
                                onClick={handleDelete}
                                data-modal-hide="popup-modal"
                                type="button"
                                className="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-600 font-medium  text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, I&apos;m sure
                            </button>
                            <button
                                onClick={close}
                                data-modal-hide="popup-modal"
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-200 dark:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-200">
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    close: PropTypes.func.isRequired
}

export default Modal
