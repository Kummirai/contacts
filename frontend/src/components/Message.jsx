const Message = ({ message }) => {
  return (
    <div
      className={
        message === ""
          ? "hidden"
          : "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      }
    >
      {message.success === true ? (
        <div
          className={
            "bg-green-100 text-green-800 py-2 px-8 border border-green-500 rounded-lg shadow-lg"
          }
        >
          <p className="text-xs sm:text-[1rem]">{message.message}</p>
        </div>
      ) : (
        <div className="bg-red-100 text-red-800 py-2 px-8 border border-red-500 rounded-lg shadow-lg">
          <p className="text-xs sm:text-[0.85rem]">{message.message}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
