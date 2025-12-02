import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col max-w-md p-4 mx-auto mt-10 ">
      <div className="flex flex-col items-center">
        <Link to={"/"}>
          <div className="w-15 h-15">
            <img
              src="/chat.png"
              alt=""
              className="h-full w-full aspect-square object-cover object-top "
            />
          </div>
        </Link>
        <h2 className="text-xl text-slate-900 text-center my-6">
          Log in into your account
        </h2>
      </div>
      <form>
        <label htmlFor="email" className="flex flex-col mb-2">
          <span className="text-slate-600 p-1">Email</span>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="p-2 text-s text-slate-600 rounded-md border outline-[#00d100] border-[#AFE1AF] bg-[#ecffdc] "
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col mb-4">
          <span className="text-slate-600 p-1">Password</span>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-2 text-s text-slate-600 rounded-md border border-[#AFE1AF]  outline-[#00d100] bg-[#ecffdc]"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-[#00d100] text-white w-[100%] p-2 rounded-md hover:bg-[#00d000] mb-4 hover:cursor-pointer "
        >
          Log In
        </button>
      </form>
      <p className="text-center font-bold text-slate-500">OR</p>
      <div>
        <button className="border border-[#AFE1AF] text-slate-600 w-[100%] p-2 rounded-md hover:bg-[#00d100] mb-4 hover:cursor-pointer hover:text-white">
          Log in with Google
        </button>
        <button className="border border-[#AFE1AF] text-slate-600 w-[100%] p-2 rounded-md hover:bg-[#00d100] mb-4 hover:cursor-pointer hover:text-white">
          Log in with Facebook
        </button>
        <button className="border border-[#AFE1AF] text-slate-600 w-[100%] p-2 rounded-md hover:bg-[#00d100] mb-4 hover:cursor-pointer hover:text-white">
          Log in with Apple
        </button>
      </div>
      <Link
        to={"/auth/signup"}
        className="text-center text-slate-500 text-[0.8rem] hover:underline hover:cursor-pointer"
      >
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default Login;
