import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className=" min-h-screen grid grid-cols-12 ">
      <div className="absolute -z-10 grid grid-cols-13 grid-rows-12 h-screen w-full">
        <div className=" shadow-2xl col-start-3 row-start-3 w-25 h-25 border-3 border-white rounded-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1681967056414-40de53affa8b?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
        <div className=" col-start-2 row-start-9 w-30 h-30 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
        <div className=" col-start-11 row-start-3 w-30 h-30 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
        <div className=" col-start-7 row-start-2 w-30 h-30 ">
          <img
            src="/chat.png"
            alt=""
            className="h-full w-full aspect-square object-cover object-top "
          />
        </div>
        <div className=" col-start-12 row-start-9 w-40 h-40 border-4 border-white  rounded-full">
          <img
            src="https://images.unsplash.com/photo-1688372296394-f8c21c15ed65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full aspect-square object-cover object-top rounded-full"
          />
        </div>
      </div>

      <div className=" text-center col-start-4 my-auto col-end-10 ">
        <h1 className="text-5xl text-slate-800 font-semibold">
          Your Proffessional Network
        </h1>
        <p className="text-2xl text-slate-800 font-light mt-8 mb-16 ">
          A professional network unlocks opportunities and provides crucial
          support. It’s a vital asset for career growth, offering access to
          jobs, advice, and industry insights that are otherwise hard to find.
        </p>
        <Link
          to={"/contacts"}
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
