import React from "react";
import { NotificationIcon } from "../components/Icons";

const Header = () => {
  return (
   <div className="bg-violet-800 h-16 text-white flex justify-between px-8 shadow-lg">
       <div className="flex items-center justify-between gap-5">
           <div>
               App Logo
           </div>
           <div>
               Tracker App
           </div>
       </div>
       <div className="flex items-center justify-between gap-5">
           <div>
               <NotificationIcon />
           </div>
           <div>
               <img className="rounded-full h-10 w-10 object-cover" 
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user Img"/>
           </div>
       </div>
   </div>
  );
};

export default Header;
