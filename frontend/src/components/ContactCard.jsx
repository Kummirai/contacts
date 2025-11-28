const ContactCard = ({ contact }) => {
  return (
    <div className="relative flex flex-col justify-around items-center p-2 shadow-2xl h-100 rounded-xl">
      <div className="trapezium rounded-t-2xl"></div>
      <h2 className="text-lg text-green-900 font-semibold">
        {contact.category}
      </h2>
      <div
        className="w-42 h-42 p-2 border-1 z-10
       border-[#ecffdc] bg-white rounded-full"
      >
        <img
          src={contact.image}
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
          {contact.contactDetail}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
