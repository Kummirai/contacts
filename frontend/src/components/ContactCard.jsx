const ContactCard = ({ contact }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 shadow-2xl h-100">
      <h2 className="text-2xl font-semibold">{contact.category}</h2>
      <div className="w-45 h-45 p-2 border-15 border-green-800 rounded-full">
        <img
          src="https://miltonkumirai.vercel.app/assets/imgs/milton.JPG"
          alt={"profile"}
          className="w-full h-full aspect-square object-cover object-top rounded-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl text-green-800 font-semibold">
          {contact.name} {contact.surname}
        </h2>
        <p className="text-[0.85rem]">{contact.jobTitle}</p>
        <p className=" border border-green-400 bg-gradient-to-r from-green-900 to-green-500 text-transparent bg-clip-text  py-2 px-5 w-fit rounded-3xl">
          {contact.contactDetail}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
