import React from "react";
import Container from "../components/container/Container";
import { Link } from "react-router-dom";
import {auth} from "../components/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,userData.email, userData.password);
      toast.success('Logged in successfully');
      navigate('/dashboard');
      localStorage.setItem('isLoggedIn', true);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }


  return (
    <Container>
      <div className="h-[85vh] flex items-center justify-center">
        <div className="bg-[#ECEDEF] flex flex-col items-center py-7 px-14 rounded-2xl">
          <h1 className="text-xl font- text-center">Login</h1>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="raunakmshraa.dev@gmail.com"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required  
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            <button className="w-full py-2 mt-4 text-black bg-[#c2f578] rounded-md hover:bg-[#a5cf66] transition-colors ease-linear hover:text-black">
              Login
            </button>
          </form>
          <span className="text-center text-sm pt-5">
            Don’t have an account? 
            <Link to="/signup" className="underline">
              &nbsp;Sign Up
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Login;
