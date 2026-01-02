import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Blog Title */}
      <div className="px-6 py-4">
        <h1 className="text-5xl font-semibold text-black text-center" style={{ fontFamily: '"Pacifico", cursive' }}>
          Mini Blog
        </h1>
      </div>

      {/* Navbar */}
      <nav
        className="px-20 py-5 mt-4 flex items-center justify-between"
        style={{ backgroundColor: "#3AABA7" }}
      >
        {/* Left Menu */}
        <ul className="flex gap-8 text-white font-medium">
          <li className="hover:opacity-80">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/category">Category</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-white">
          <Link
            to="/signin"
            className="font-medium hover:opacity-80"
          >
            Signin
          </Link>

          <FaSearch className="cursor-pointer hover:opacity-80 text-lg" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
