import React, { useState } from "react";
import Container from "../components/container/Container";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import {auth, db} from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
        await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const user = auth.currentUser;
        console.log(user);
        if(user) {
            await setDoc(doc(db, "users", user.uid), {
                email: userData.email,
                fullName: userData.fullName,
            });
        }
        
        toast.success("User Created Successfully");
        navigate('/login');
    } catch (error) {
        toast.error(error.message);
        console.log(error);
    }
  }

  return (
    <Container>
      <div className="h-[85vh] flex items-center justify-center">
        <div className="bg-[#ECEDEF] flex flex-col items-center py-7 px-14 rounded-2xl">
          <h1 className="text-xl font- text-center">SignUp</h1>
          <form onSubmit={handleSubmit} className="mt-6">
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
                FullName
              </label>
              <input
                type="text"
                required
                value={userData.fullName}
                onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                placeholder="Raunak Mishra"
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
            <button type="submit" className="w-full py-2 mt-4 text-black bg-[#c2f578] rounded-md hover:bg-[#a5cf66] transition-colors ease-linear hover:text-black">
              SignUp
            </button>
          </form>
          <span className="text-center text-sm pt-5">
            Already have an account? 
            <Link to="/login" className="cursor-pointer underline">
              &nbsp;Login
            </Link>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
