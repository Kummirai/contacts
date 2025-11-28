const AddContact = ({}) => {
  return (
    <div className="max-w-[32rem] mx-auto  p-5">
      <form
        onSubmit={""}
        className=" rounded-2xl flex flex-col justify-evenly items-center p-5 h-full
        "
      >
        <h2 className="text-center text-2xl text-green-950 font-semibold">
          Add Proffesional Contact
        </h2>

        <div className="m-5">
          <input
            type="text"
            placeholder="Enter work category"
            value={""}
            onChange={"handleChange"}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Enter your name"
            value={""}
            onChange={"handleChange"}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Enter your surname"
            value={""}
            onChange={"handleChange"}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Enter your job title"
            value={""}
            onChange={"handleChange"}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />

          <input
            type="text"
            placeholder="Enter your image url"
            value={""}
            onChange={"handleChange"}
            className=" rounded-xl w-full border px-6 py-3 border-[#AFE1AF] outline-[#4F7942] m-2"
          />
        </div>
        <button type="button" className="btn-card py-2 px-8 rounded-3xl ">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
