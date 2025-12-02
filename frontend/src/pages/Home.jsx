import { Link } from "react-router-dom";

const Home = ({ isloggedIn }) => {
  console.log(isloggedIn);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" absolute -z-10 grid grid-cols-13 grid-rows-12 h-screen max-w-8xl">
        <div className=" shadow-2xl md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-3 md:w-22 md:h-22 w-25 h-25 border-3 border-white rounded-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1681967056414-40de53affa8b?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
        <div className=" col-start-2 row-start-9 w-30 h-30 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
        <div className=" col-start-11 row-start-3 w-25 h-25 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>

        <div className="md:col-start-11 xl:col-start-12 row-start-9 w-30 h-30 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1688372296394-f8c21c15ed65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
      </div>

      <div className="h-[68%] flex flex-col items-center justify-around text-center sm:w-2/4">
        <div className="w-25 h-25">
          <img
            src="/chat.png"
            alt=""
            className="h-full w-full aspect-square object-cover object-top "
          />
        </div>
        <div className="">
          <h1 className="text-[46px] text-slate-800 mb-3  font-semibold">
            Your Professional Network
          </h1>
          <p className="text-[22px] text-slate-800 font-thin ">
            A professional network unlocks opportunities and provides crucial
            support. It’s a vital asset for career growth, offering access to
            jobs, advice, and industry insights that are otherwise hard to find.
          </p>
        </div>

        <Link
          to={isloggedIn ? "/contacts" : "/login"}
          type="button"
          className="bg-[#00d100] border border-transparent text-white text-[1rem] px-12 py-3 rounded-4xl hover:cursor-pointer hover:border hover:border-[#00d100] hover:bg-transparent hover:text-[#00d100]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
