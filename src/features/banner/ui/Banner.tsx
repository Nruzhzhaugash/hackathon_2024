import React from "react";

interface BannerProps {
  title: string;
  imgUrl: string;
  content: string;
}

const Banner: React.FC<BannerProps> = ({ title, imgUrl, content }) => {
  return (
    <div>
      <div className="mt-[60px] mb-[120px] relative h-[700px] w-[1295px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imgUrl}
            alt="background"
          />
        </div>
        <div className="relative flex flex-col mt-[260px] items-center justify-center text-center text-link">
          <h1 className="text-xl mb-[50px]">{title}</h1>
          <div className="text-center w-[770px] mb-[240px]">
            <p className="text-base font-involveRG">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
