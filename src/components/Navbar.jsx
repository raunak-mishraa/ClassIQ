import React, { useEffect, useState } from "react";
import Container from "./container/Container";
import logo from "../assets/logo.png";
import mlogo from "../assets/m-logo.svg";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import {auth, db} from './firebase'
import {doc, getDoc} from 'firebase/firestore'
function Navbar() {
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          const data = docSnap.data();
          console.log(data);
        } else {
          console.log("No such document!");
        }
      } 
    });
  }

  useEffect(()=> {
    fetchUserData();
  }, []);

  const navigate = useNavigate()
  async function handleLogout() {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('isLoggedIn', true);
      navigate('/login');

      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <div className="h-20  flex items-center justify-between">
        <div className="flex gap-x-4 sm:gap-x-8 items-center">
          <Link to='/'>
            <img src={logo} alt="logo" className="h-10 hidden sm:block" />
            <img src={mlogo} alt="logo" className="h-10 md:hidden block" />
          </Link>
          <div className="text-[#3E3E3E] hover:text-black transition-colors ease-linear ">Courses</div>
        </div>
        <IoMenu  className="text-2xl md:hidden block"/>
        <div className="md:flex gap-x-4 hidden">
            {!user ? 
            <>
             <Button onClick={()=>navigate('/login')} className='font-semibold bg-black hover:bg-[#181818] text-white rounded-lg px-5'>
                Login
            </Button>
            <Button onClick={()=>navigate('/signup')} className='font-semibold bg-black hover:bg-[#181818] text-white rounded-lg px-5'>
                SignUp
            </Button>
            </>  :
         <Button onClick={handleLogout} className='font-semibold bg-black hover:bg-[#181818] text-white rounded-lg px-5'>
         LogOut
     </Button>
          }
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
