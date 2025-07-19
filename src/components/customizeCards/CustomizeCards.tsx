"use client";

import Image from "next/image";
import React from "react";

type CustomizeCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl: any
  altText: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  reverse?: boolean;
};

const CustomizeCards: React.FC<CustomizeCardProps> = ({
  imageUrl,
  altText,
  title,
  description,
  buttonText,
  onButtonClick,
  reverse = false,
}) => {
  return (
    <div
      className={`container bg-[#FDE8E9] mx-auto px-7 py-7 flex flex-col md:flex-row items-center justify-between gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }  rounded-lg`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-[400px]">
        <Image
          src={imageUrl}
          alt={altText}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 h-[400px] flex flex-col justify-center p-6 rounded-lg">
        <h2 className="lg:text-[32px] md:text-[28px] text-[20px] font-semibold text-[#212121] mb-5 leading-[120%]">{title}</h2>
        <p className="text-[#595959] lg:text-base  md:text-base text-sm leading-[150%] mb-5">{description}</p>
        <button
          onClick={onButtonClick}
          className="bg-red-500 text-white w-[209px] h-[51px]  rounded-lg hover:bg-red-600 transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CustomizeCards;