import React from "react";
import CustomizeHeader from "./_components/CustomizeHeader";
import CustomizePage from "./_components/CustomizePage";

function page() {
  return (
    <div>
      <CustomizeHeader />
      <div className="lg:my-[88px] md:my-[60px] my-[50px]">
        <CustomizePage />
      </div>
    </div>
  );
}

export default page;
