import { IoAddSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

const Header = ({ gotoAddContactPage, gotoHomePage, isUpdatingContact }) => {
  return (
    <header className="p-5 flex items-center justify-between border-b border-b-[#ECFFDC] text-green-950">
      <h1
        className="text-xl heading font-semibold sm:text-2xl hover:cursor-pointer text-green-900 "
        onClick={() => gotoHomePage()}
      >
        Proffessional Contacts
      </h1>
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
