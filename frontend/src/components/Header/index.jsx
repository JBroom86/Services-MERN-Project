import { Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 flex flex-col sm:flex-row justify-between items-center">
      <Link to="/" className="flex items-center gap-1">
        <img
          src="https://static.thenounproject.com/png/1335654-200.png"
          alt=""
          className="w-20 h-20"
        />
        <span>
          <strong>Absolute Skin</strong> by Aireonna
        </span>
      </Link>
      <div className="flex items-center mt-4 sm:mt-0  border border-brown-300 rounded-full p-2 shadow-md shadow-gray-300">
        <div className="p-4">
          <Link to="/services">Services</Link>
        </div>
        <div className="p-4">
          <Link to="/products">Products</Link>
        </div>
        <div className="p-4">
          <Link to="/about">About Me</Link>
        </div>
        <div className="p-4">
          <Link to={"/auth/login"}>Log In</Link>
        </div>
        <div className="p-4">
          <Link to="/auth/signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
