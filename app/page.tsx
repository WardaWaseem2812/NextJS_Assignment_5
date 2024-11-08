import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center">
      <Header />
        
      <div className="flex flex-col lg:flex-row h-[80%] lg:ml-[176px]">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-2/3 flex flex-col lg:text-left">
          
          {/* Heading */}
          <h1 className="text-[#000000] font-bold text-[28px] md:text-[32px] lg:text-[40px] lg:w-[496px] pt-[40px] lg:pt-[182px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#787054] font-medium text-[18px] md:text-[24px] lg:text-[30px] max-w-full lg:max-w-[902px] h-auto lg:h-[147px] flex pt-[8px] pb-10 lg:pb-14 mb-8">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          
          {/* Button */}
          <button className="bg-[#A29875] text-[#FFFFFF] font-medium text-[18px] md:text-[20px] lg:text-[24px] p-[10px] gap-2.5 rounded-[10px] mt-[20px] w-[200px] md:w-[250px] lg:w-[288px] mx-auto lg:mx-0">
            Explore Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center items-center mt-6 lg:mt-[64px] lg:ml-[24px] overflow-hidden">
          
          {/* Border inside the image */}
          <div className="relative w-[490px] h-auto">
           <div className="m-[5%] absolute inset-0 border-[1px] border-[#FFFFFF] rounded-[150px_0px_150px_0px] "></div>
            
            {/* Image */}
            <img 
              src="/images/slider-1.jpg.svg" 
              alt="Jewelry Display" 
              className="w-[490px] h-auto object-contain rounded-[150px_0px_150px_0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
