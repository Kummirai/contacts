import { IoAddSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

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
          : "pt-10 pb-3  flex items-center justify-between border-b border-b-[#ECFFDC] text-green-950"
      }
    >
      <h2
        className="text-xl heading font-semibold hover:cursor-pointer text-green-900 "
        onClick={() => gotoHomePage()}
      >
        Contacts
      </h2>
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
