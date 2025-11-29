const Message = ({ message }) => {
  if (!message || message === "") return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div
        className={`px-12 py-3 rounded-xl shadow-lg text-center animate-fadeIn ${
          message.success
            ? "bg-green-100 border border-green-500 text-green-800"
            : "bg-red-100 border border-red-500 text-red-800"
        }`}
      >
        <p className="text-sm sm:text-base ">{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
