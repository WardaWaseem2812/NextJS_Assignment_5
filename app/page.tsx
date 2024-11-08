import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center">
      <Header />
        
      <div className="flex flex-row h-[80%] lg:ml-[176px]">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-2/3 flex flex-col lg:text-left ml-3">
          
          {/* Heading */}
          <h1 className="text-[#000000] font-bold text-[28px] md:text-[32px] lg:text-[40px] lg:w-[496px] pt-[40px] lg:pt-[182px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#787054] font-medium text-[18px] lg:text-[30px] max-w-[902px] h-auto lg:h-[147px] flex pt-[8px] pb-6 lg:mb-14">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          
          {/* Button */}
          <button className="bg-[#A29875] text-[#FFFFFF] font-medium text-[18px] lg:text-[24px] p-[10px]  rounded-[10px] w-[200px] md:w-[250px] lg:w-[288px] lg:mx-0">
            Explore Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative lg:w-1/3 flex justify-center items-center mt-20 pr-12">
          
          {/* Border inside the image */}
          <div className="relative h-auto">
            <div className="m-[5%] absolute inset-0 border-[1px] border-[#FFFFFF] rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"></div>
  
            {/* Image */}
            <img 
              src="/images/slider-1.jpg.svg" 
              alt="Jewelry Display" 
              className="object-contain rounded-[50px_0px_50px_0px] lg:rounded-[150px_0px_150px_0px]"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
