import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // console.log(Food)
  const Food = [
    {
      id: "533143aaff604d567f8b4571",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
      name: "Crispy Fish Goujons ",
      price: 600
    },
    {
      id: "53314247ff604d44808b4569",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
      name: "Moroccan Skirt Steak ",
      price: 1000
    },
    {
      id: "53314276ff604d28828b456b",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314276ff604d28828b456b.jpg",
      name: "Simple Sumptuous Sea Bream",
      price: 300
    },
    {
      id: "533143bfff604d44808b456a",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143bfff604d44808b456a.jpg",
      name: "Mozzarella and Pesto Roulades",
      price: 799
    },
    {
      id: "5331430fff604d557f8b456d",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5331430fff604d557f8b456d.jpg",
      name: "Mexican Tortilla Stack",
      price: 899
    },
    {
      id: "53314328ff604d4d808b456b",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314328ff604d4d808b456b.jpg",
      name: "Roasted Rosemary Butternut Squash ",
      price: 1999
    },
    {
      id: "53314343ff604d28828b456c",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg",
      name: "Gnocchi Allo Genovese",
      price: 435
    },
    {
      id: "53314398ff604d6c7a8b456a",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg",
      name: "Herbed Italian Polpetti",
      price: 900
    },
    {
      id: "5252b20c301bbf46038b477e",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg",
      name: "Genki Yakitori with Crispy Red Onions",
      price: 599
    },
    {
      id: "5331430fff604d557f8b456c",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/sausage-risotto-wk41-a201d2fa.jpg",
      name: "Sausage Risotto",
      price: 899
    },
    {
      id: "53314328ff604d4d128b456b",
      image:
        "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/54511c31ff604dee7b8b4571.jpg",
      name: "Bacon Wrapped Pork Loin ",
      price: 678
    },
  ];
  return (
    <>
      <div className="w-[90] mx-auto overflow-hidden ">
        <h1 className=" font-bold text-3xl pl-10">What's in your Mind </h1>
        <div className="py-20">
        <Slider {...settings}>
          {Food.map((item) => (
            <div className="bg-white rounded-md " key={item.id}>

              <div className=" flex justify-center items-center rounded-t-xl">
                <img src={item.image} alt="" className="w-[170px] rounded-full h-[170px] object-cover" />
              </div>

              <div className="flex flex-col justify-center items-center gap-2 p-4">
                <p className=" text-[16px] font-semibold uppercase">{item.name}</p>
                <span>${item.price}</span>
                <button className='bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531]'>Add to Cart</button>

              </div>

            </div>
            
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FoodSlider;
