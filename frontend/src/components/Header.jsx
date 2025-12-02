import { IoAddSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          className="btn-card p-1 rounded-xs hover:bg-green-600 hover:cursor-pointer"
          onClick={() => {
            gotoAddContactPage();
          }}
        >
          <IoAddSharp className="text-xl text-white " />
        </button>
      ) : (
        <button
          type="button"
          aria-label="home"
          className="btn-card p-1 rounded-xs hover:bg-green-600 hover:cursor-pointer"
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
