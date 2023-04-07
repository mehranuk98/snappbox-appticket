import React, { useState,useEffect } from 'react'
import * as te from 'tw-elements';
import login from "../components/Login"
import {Navigate,useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div className='fixed bg-[#ffffff] w-full h-[60px] text-gray-300 flex justify-between'>
        <div className='mx-4  mt-3'>
           
           <button
            type="button"
            className="inline-block rounded bg-[#2563EB] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-toggle="modal"
            data-te-target="#exampleModalScrollable"
            data-te-ripple-init
            data-te-ripple-color="light">
            قوانین پاسخگویی به تیکت
          </button>
        </div>
              
        <div className='mt-[10px] pr-[20px]'>
        <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
        </div>

    </div>
  )
}

export default Header