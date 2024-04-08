import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidenav, setSideNav] = useState(false);

  return (
    <div className="  flex justify-between py-[20px] px-[25px] text-[20px] font-semibold border-b drop-shadow relative">
      <div>
        <p>
          Delicious <span className=" text-[#f1c40f]">Food</span>
        </p>
      </div>
      <div>
        <ul className=" sm:flex gap-4 hidden cursor-pointer    ">
          <Link to="/">
            <li className="hover:text-[#f1c40f]">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="hover:text-[#f1c40f]">About US</li>
          </Link>
          <Link to="/ourfood">
            <li className="hover:text-[#f1c40f]"> OurFood</li>
          </Link>
          <Link to="/signin">
            <li className="hover:text-[#f1c40f]">Sign In</li>
          </Link>
        </ul>
      </div>
      {sidenav ? (
        <div className="  bg-[#95a5a6]   w-[300px] absolute top-0 right-0  text-center h-[100vh] flex justify-center items-center ">
          <RxCross1
            onClick={() => setSideNav(!sidenav)}
            size={30}
            className=" absolute top-3 right-3 cursor-pointer "
          />
          <ul className=" flex gap-12  cursor-pointer flex-col    ">
            <li className="hover:text-[#f1c40f]">Home</li>
            <li className="hover:text-[#f1c40f]">About US</li>
            <li className="hover:text-[#f1c40f]"> OurFood</li>
            <li className="hover:text-[#f1c40f]">Sign In</li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className=" flex gap-3">
        <p>
          <GiHamburgerMenu
            onClick={() => setSideNav(!sidenav)}
            size={30}
            className=" cursor-pointer block sm:hidden"
          />
        </p>
        <p>
          <FaCartShopping size={30} className="cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="  bg-[#95a5a6]  absolute w-[300px] top-0 right-0  text-center h-[100vh] flex justify-center items-center ">
<RxCross1 size={30} className=" absolute top-3 right-3 cursor-pointer " />
  <ul className=" sm:flex gap-12 hidden cursor-pointer flex-col    ">
    <li className="hover:text-[#f1c40f]">Home</li>
    <li className="hover:text-[#f1c40f]">About US</li>
    <li className="hover:text-[#f1c40f]">  Offers</li>
    <li className="hover:text-[#f1c40f]">Sign In</li>
  </ul>
</div> */
}
