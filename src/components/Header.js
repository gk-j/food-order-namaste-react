import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useRecoilValue } from "recoil";
import { cartState } from "../store/atom.js";

export const Header = () => {

    const [btnName,setBtnName] = useState("login")
    const onlineStatus = useOnlineStatus()
    const cartList = useRecoilValue(cartState)
    // console.log(onlineStatus)
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2  fixed top-0 w-screen z-20 ">
        <div>
            <Link to="/">
            <img className="w-20" src={LOGO_URL}/>
            </Link> 
              
        </div>
        <div className="flex align-center">
            
          <ul className="flex p-4 m-4">
            <li className="px-4">OnlineStatus: {onlineStatus?"green":"red"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Wanna Go to Grocery Store</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">
                Cart ({cartList.length})
              </Link>
            </li>
            <button 
              className="login"
              onClick={()=>{
                if(btnName==="login"){
                  return setBtnName("logout")
                }else{
                  return setBtnName('login')
                }
              }}
              >
                {btnName}</button>
               
          </ul>
        </div>
      </div>
    );
  };

  export default Header