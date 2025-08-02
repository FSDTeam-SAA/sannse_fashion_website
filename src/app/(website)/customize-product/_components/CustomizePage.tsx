"use client";

import React from "react";
import CustomizeCards from "@/components/customizeCards/CustomizeCards";
import cusotmimage from "@/Public/images/customCardImage.png";

const customizeSections = [
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 1",
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend.",
    buttonText: "Know more",
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 2",
    title: "Vestibulum ante ipsum primis in faucibus",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    buttonText: "Know more",
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 3",
    title: "Mauris blandit aliquet elit",
    description:
      "Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.",
    buttonText: "Know more",
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 4",
    title: "Curabitur aliquet quam id dui posuere",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.",
    buttonText: "Know more",
  },
];

function CustomizePage() {
  return (
    <div className="lg:space-y-[100px] md:space-y-[70px] space-y-[60px]">
      {customizeSections.map((section, index) => (
        <CustomizeCards
          key={index}
          imageUrl={section.imageUrl}
          altText={section.altText}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          reverse={index % 2 !== 0} // Alternate layout: true for odd index
        />
      ))}
    </div>
  );
}

export default CustomizePage;
