import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className=" h-screen grid grid-cols-12 ">
      <div className=" text-center col-start-4 my-auto col-end-10 ">
        <h1 className="text-5xl text-slate-800 font-semibold">
          Your Proffessional Network
        </h1>
        <p className="text-2xl text-slate-800 font-light mt-7 mb-14 ">
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
