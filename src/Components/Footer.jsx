import React from "react";

function Footer() {
  return (
    <div className=" w-full bg-black text-white ">
      <div className=" grid grid-cols-2 md:grid-cols-4 py-10 pl-6 cursor-pointer">
        <div>
          <h2 className="font-bold mb-3 text-[25px]"  >Delicious <span className=" text-[#f1c40f]">Food</span></h2>
          <p className="text-[20px]  text-[gray]">© 2023 Bundl Technologies Pvt. Ltd</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]" >Company</h2>
          <p className="text-[20px] mb-2 text-[gray]">About</p>
          <p className="text-[20px] mb-2 text-[gray]">Carrers</p>
          <p className="text-[20px] mb-2 text-[gray]">Teams</p>
          <p className="text-[20px] mb-2 text-[gray]">Swiggy One</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]" >Help & Support</h2>
          <p className="text-[20px] mb-2 text-[gray]">Compnay</p>
          <p className="text-[20px] mb-2 text-[gray]" >Partner With us</p>
          <p className="text-[20px] mb-2 text-[gray]" >Ride With us</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]" >We Deliver to:</h2>
          <p className="text-[20px] mb-2 text-[gray]" >Lahore</p>
          <p className="text-[20px] mb-2 text-[gray]"> Karachi</p>
          <p className="text-[20px] mb-2 text-[gray]">Islamabad</p>
          <p className="text-[20px] mb-2 text-[gray]">Quetta</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
