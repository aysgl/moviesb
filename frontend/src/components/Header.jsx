import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <Link to="/">
        <Logo />
      </Link>
      <Link
        to="/create"
        className="text-5xl font-[100] transition duration-500 ease-in-out hover:text-red-600">
        +
      </Link>
    </div>
  );
};

export default Header;
