const AddContact = ({
  handleCategory,
  handleName,
  handleSurname,
  handleJobTitle,
  handleImgUrl,
  handleSubmit,
  handleContact,
  contact,
  category,
  name,
  surname,
  jobTitle,
  imgUrl,
  isUpdatingContact,
  gotoHomePage,
}) => {
  return (
    <div className="max-w-[36rem] mx-auto  p-5">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" rounded-2xl flex flex-col justify-evenly items-center p-5 h-full
        "
      >
        <h2 className="text-center text-2xl text-green-950 font-semibold">
          Add Proffesional Contact
        </h2>

        <div className="m-5">
          <input
            required
            type="text"
            value={category}
            placeholder="Your work category"
            onChange={(e) => handleCategory(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => handleName(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            required
            placeholder="Your surname"
            value={surname}
            onChange={(e) => handleSurname(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Your job title"
            value={jobTitle}
            required
            onChange={(e) => handleJobTitle(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />
          <input
            type="text"
            placeholder="Your email or phone number or social media url"
            value={contact}
            required
            onChange={(e) => handleContact(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Your image url"
            value={imgUrl}
            required
            onChange={(e) => handleImgUrl(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />
        </div>
        {isUpdatingContact ? (
          <div>
            <button
              onClick={gotoHomePage}
              type="button"
              className="rounded-3xl border btn-bordered text-[#00d100] border-[#00d100] py-2 px-8 mx-2 "
            >
              Cancel
            </button>
            <button type="button" className="btn-card py-2 px-8 rounded-3xl ">
              Update Contact
            </button>
          </div>
        ) : (
          <button type="submit" className="btn-card py-2 px-8 rounded-3xl ">
            Add Contact
          </button>
        )}
      </form>
    </div>
  );
};

export default AddContact;
