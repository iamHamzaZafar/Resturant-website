import React from "react";

function OurFood() {
    const mealData = [
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
      <div className="w-[90%] mx-auto">
        <div>
          <h2 className="text-center text-[#fbc531] text-3xl font-bold py-5">
            {" "}
            Our Food
          </h2>
        </div>

        <div className=" grid lg:grid-cols-4 md:grid-cols-2 py-6 gap-2 ">
          {mealData.map((meal) => (
            <div className="flex justify-center flex-col items-center">

                <div>
                    <img src={meal.image} alt="" className="w-[200px] h-[200px] rounded-lg object-cover" />
                </div>

                <div className="flex justify-center py-2 px-4 flex-col items-center">
                    <p  >{meal.name}</p>
                    <p>{meal.price}</p>
                    <button className="bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531]">Add to Cart </button>
                </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurFood;
