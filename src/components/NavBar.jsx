import { Link } from "react-router-dom";
import { Logo } from "../constant/Api/Api";
const navitem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "/about",
  },
];

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg sticky top-0 z-10 bg-white opacity-90 mt-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={Logo} alt="" className=" w-14 rounded-full " />
          <span className="ml-3 text-xl">Master Solo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navitem.map((item) => {
            return (
              <Link
                to={item.path}
                className="mr-5 hover:text-blue-900 font-bold"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Link to="/cart">
          <button className="inline-flex items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-800 rounded text-base mt-4 md:mt-0 text-white">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
