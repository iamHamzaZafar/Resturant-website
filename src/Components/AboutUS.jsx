import React from "react";

const AboutUS = () => {
  return (
    <>
      <div className=" text-gray-600 w-[80%] mx-auto">
        <div className="px-[16px]">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8">
            Driving Force of <span className="text-[#fbc531]"> Assortment</span>
          </h2>
          <p className="mb-8 leading-relaxed text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            quasi officiis aperiam, molestiae doloremque tempore fugiat alias
            iusto beatae vero.
          </p>
        </div>

        <div className=" container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex md:w-1/2 lg:pr-20 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h2 className=" title-font sm:text-4xl text-3xl mb-4  font-medium text-gray-900 ">
              Who we Are
            </h2>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              incidunt commodi culpa consequatur deserunt quisquam doloribus
              itaque nostrum sint ipsum, aperiam enim molestiae alias modi,
              dignissimos, rem ut blanditiis hic corrupti voluptatum ab iure! Ea
              assumenda consectetur delectus. Expedita cum delectus, adipisci
              eum voluptatem doloremque unde nam nisi officiis autem!
            </p>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src="https://i.ytimg.com/vi/YRNkiZ2c7fo/maxresdefault.jpg" alt="" className="object-cover object-center rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
