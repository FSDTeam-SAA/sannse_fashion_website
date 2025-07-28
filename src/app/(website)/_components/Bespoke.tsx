import Image from "next/image";
import bespokeImage from "@/Public/images/bespoke.png";

const BespokeSection = () => {
  return (
    <div className="container mx-auto pt-[80px]">
      <h2 className="lg:text-[40px] md:text-[30px] text-[20px] font-semibold leading-[120%] text-[#000000] mb-[40px]">
        Bespoke from head to toe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        <div className="border border-red-600">
          <div className="flex flex-col items-center bg-[#FDE8E9]">
            <Image
              src={bespokeImage}
              alt="Shirts"
              width={300}
              height={300}
              className="w-full h-[320px] object-cover border-b border-red-600"
            />
            <p className="mt-4 px-4 py-2 text-center font-semibold">Shirts</p>
          </div>
        </div>
        <div className="border border-red-600">
          <div className="flex flex-col items-center bg-[#FDE8E9]">
            <Image
              src={bespokeImage}
              alt="Shirts"
              width={300}
              height={300}
              className="w-full h-[320px] object-cover border-b border-red-600"
            />
            <p className="mt-4 px-4 py-2 text-center font-semibold">Shirts</p>
          </div>
        </div>
        <div className="border border-red-600">
          <div className="flex flex-col items-center bg-[#FDE8E9]">
            <Image
              src={bespokeImage}
              alt="Shirts"
              width={300}
              height={300}
              className="w-full h-[320px] object-cover border-b border-red-600"
            />
            <p className="mt-4 px-4 py-2 text-center font-semibold">Shirts</p>
          </div>
        </div>
        <div className="border border-red-600">
          <div className="flex flex-col items-center bg-[#FDE8E9]">
            <Image
              src={bespokeImage}
              alt="Shirts"
              width={300}
              height={300}
              className="w-full h-[320px] object-cover border-b border-red-600"
            />
            <p className="mt-4 px-4 py-2 text-center font-semibold">Shirts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BespokeSection;
