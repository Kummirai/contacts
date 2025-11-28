import { IoAddSharp } from "react-icons/io5";

const Header = ({}) => {
  return (
    <header className="p-5 flex items-center justify-between bg-green-50 text-green-950">
      <h1 className="text-xl font-semibold sm:text-2xl">
        Proffessional Contacts
      </h1>
      <button
        type="button"
        className="bg-green-950 p-1 rounded-xs hover:bg-green-600 hover:cursor-pointer"
      >
        <IoAddSharp className="text-xl text-white " />
      </button>
    </header>
  );
};

export default Header;
