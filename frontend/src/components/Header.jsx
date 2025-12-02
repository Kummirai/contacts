import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Header = ({
  gotoAddContactPage,
  gotoHomePage,
  isUpdatingContact,
  currentUrl,
}) => {
  return (
    <header
      className={
        currentUrl === "/"
          ? "hidden"
          : currentUrl === "/auth/login"
            ? "hidden"
            : currentUrl === "/auth/signup"
              ? "hidden"
              : "pt-10 pb-3  flex items-center justify-between border-b border-b-[#ECFFDC] text-green-950"
      }
    >
      <Link
        to={
          currentUrl === "/add-contact"
            ? "/contacts"
            : currentUrl === "/contacts"
              ? "/"
              : "/"
        }
      >
        <h2 className="flex items-center text-md heading  hover:cursor-pointer text-slate-700 hover:text-slate-500">
          <span className="">
            <IoArrowBackCircleSharp className="text-2xl" />
          </span>
          <span className="ml-2">
            {currentUrl === "/add-contact"
              ? "Back to contacts"
              : "Back to Home page"}
          </span>
        </h2>
      </Link>

      <button
        aria-label="update"
        type="button"
        className={
          currentUrl === "/add-contact"
            ? "hidden"
            : "flex items-center text-md heading hover:cursor-pointer text-slate-700 hover:text-slate-500 "
        }
        onClick={() => {
          gotoAddContactPage();
        }}
      >
        <span className="mr-2 mb-1">Add Contact</span>
        <span>
          <FaArrowCircleRight className="text-2xl" />
        </span>
      </button>
    </header>
  );
};

export default Header;
