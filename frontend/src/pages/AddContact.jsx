import Message from "../components/Message";

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
  submitEdit,
  contactId,
  message,
  user,
}) => {
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="max-w-[36rem] mx-auto sm:px-5 p-0">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" rounded-2xl flex flex-col justify-evenly items-center p-5 h-full
        "
      >
        <h2 className="text-center text-xl text-slate-700 font-semibold">
          Create Contact
        </h2>

        <div className="m-5">
          <input
            required
            type="text"
            value={category}
            placeholder="Work category"
            onChange={(e) => handleCategory(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            required
            placeholder="First Name"
            value={name}
            onChange={(e) => handleName(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            required
            placeholder="Last Name"
            value={surname}
            onChange={(e) => handleSurname(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            required
            onChange={(e) => handleJobTitle(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />
          <input
            type="text"
            placeholder="Email Or Phone Number Or Social Media Url"
            value={contact}
            required
            onChange={(e) => handleContact(e)}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Image Url"
            value={imgUrl}
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
            <button
              type="button"
              onClick={() => submitEdit(contactId)}
              className="btn-card py-2 px-8 rounded-3xl "
            >
              Update Contact
            </button>
          </div>
        ) : (
          <button type="submit" className="btn-card py-2 px-8 rounded-3xl ">
            Add Contact
          </button>
        )}
      </form>
      <Message message={message} />
    </div>
  );
};

export default AddContact;
