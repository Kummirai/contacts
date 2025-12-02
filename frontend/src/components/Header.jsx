import { IoAddSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
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
        <h2 className="text-lg heading font-semibold hover:cursor-pointer text-slate-700 ">
          <span className="flex items-center">
            <span className="">
              <IoArrowBackCircleSharp className="text-slate-600 text-2xl" />
            </span>
            <span className="ml-2">
              {currentUrl === "/add-contact"
                ? "Back to contacts"
                : "Back to Home page"}
            </span>
          </span>
        </h2>
      </Link>

      {!isUpdatingContact ? (
        <button
          aria-label="update"
          type="button"
          className={
            currentUrl === "/add-contact"
              ? "hidden"
              : "flex items-center text-lg heading font-semibold hover:cursor-pointer text-slate-700 "
          }
          onClick={() => {
            gotoAddContactPage();
          }}
        >
          <span className="mr-2 mb-1">Add Contact</span>
          <span>
            <FaArrowCircleRight className="text-xl" />
          </span>
        </button>
      ) : (
        <button
          type="button"
          aria-label="home"
          className="p-1 rounded-xs text-slate-700 hover:cursor-pointer"
          onClick={() => {
            gotoHomePage();
          }}
        >
          <IoHomeSharp className="text-xl text-white " />
        </button>
      )}
    </header>
  );
};

export default Header;
