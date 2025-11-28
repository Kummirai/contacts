import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const ContactCard = ({ contact }) => {
  return (
    <div className="relative flex flex-col justify-around items-center p-2 shadow-2xl h-100 rounded-xl bg-white">
      <div className="trapezium rounded-t-2xl"></div>
      <h2 className="text-lg z-2 text-green-900 font-semibold">
        {contact.category}
      </h2>
      <div
        className="w-42 h-42 p-2 border-1 z-10
       border-[#ecffdc] bg-white rounded-full"
      >
        <img
          src={contact.imgUrl}
          alt={"profile"}
          className="w-full h-full aspect-square object-cover object-top rounded-full -z-10"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl text-green-800 font-semibold">
            {contact.name} {contact.surname}
          </h2>
          <p className="text-[0.8rem] text-slate-700">{contact.jobTitle}</p>
        </div>
        <p className="btn font-semibold py-2 px-5 text-[0.85rem] text-green-950 w-fit rounded-3xl">
          {contact.contact}
        </p>
      </div>
      <div className="">
        <button type="button" className="btn-card py-1 px-5 mx-2 rounded-2xl">
          <CiEdit className="text-[1rem]" />
        </button>
        <button
          type="button"
          className="rounded-2xl border btn-bordered text-[#00d100] border-[#00d100] py-1 px-4 mx-2 "
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
