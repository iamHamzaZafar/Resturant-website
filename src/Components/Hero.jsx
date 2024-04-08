import React from "react";
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

const Hero = () => {
  const imageData = [
    {
      img: food1,
    },
    {
      img: food2,
    },
    {
      img: food3,
    },
  ];

  const [slider, setSlider] = useState(0);

  const handleLeft = () => {
    setSlider(slider === imageData.length - 1 ? 0 : slider + 1);
  };

  const handleRight = () => {
    setSlider(slider === 0 ? imageData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const clear = setInterval(() => {
      handleLeft();
    }, 4000);

    return () => clearInterval(clear);
  }, [slider]);
  return (
    <>
    <div>


      <div className="w-[90%] mx-auto   h-[80vh] my-5 " >
        {imageData.map((item, i) => {
          return (
            <div key={i} className={`${slider == i ? "block" : "hidden"}` }>
              <img src={item.img} alt="Food Image" className="w-full h-[80vh] rounded-2xl object-cover brightness-50 " />
            </div>
          );
        })}
        <div className=" absolute top-96 left-[37%]  ">
            <p className="text-white text-3xl font-semibold">Welcome to The world of Tastey Food</p>
        </div>
      </div>

      <div className="flex items-center justify-evenly cursor-pointer ">
        <FaChevronLeft size={40} onClick={handleLeft} />
        <FaChevronRight size={40} onClick={handleRight} />
      </div>

      </div>
    </>
  );
};

export default Hero;
