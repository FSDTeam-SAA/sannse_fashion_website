"use client";

import React from "react";
import CustomizeCards from "@/components/customizeCards/CustomizeCards";
import cusotmimage from "@/Public/images/customCardImage.png";

const customizeSections = [
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 1",
    title: "Lorem ipsum dolor sit amet, ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend. ",
    buttonText: "Know more",
    reverse: false,
  },
];

function KnowMore() {
  return (
    <div>
      {customizeSections.map((section, index) => (
        <CustomizeCards
          key={index}
          imageUrl={cusotmimage}
          altText={section.altText}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
}

export default KnowMore;
