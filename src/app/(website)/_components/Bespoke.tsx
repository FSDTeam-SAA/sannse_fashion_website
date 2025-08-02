import Image from "next/image";
import bespokeImage from "@/Public/images/bespoke.png";
import bespokeImage1 from "@/Public/images/Shirts.png";
import bespokeImage2 from "@/Public/images/Jackets.png";
import bespokeImage3 from "@/Public/images/Others .png";
import Link from "next/link";

const BespokeSection = () => {
  return (
    <div className="container mx-auto lg:pt-[80px] md:pt-[60px] pt-[50px] px-4 lg:px-0 md:px-0">
      <h2 className="lg:text-[40px] md:text-[30px] text-[28px] font-semibold leading-[120%] text-[#000000] mb-[40px]">
        Bespoke from head to toe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        <div className="border border-red-600">
          <Link href="/shirts">
            <div className="flex flex-col items-center bg-[#FDE8E9]">
              <Image
                src={bespokeImage1}
                alt="Shirts"
                width={300}
                height={300}
                className="w-full h-[320px] object-cover border-b border-red-600"
              />
              <p className="mt-4 px-4 py-2 text-center font-semibold">Shirts</p>
            </div>
          </Link>
        </div>
        <div className="border border-red-600">
          <Link href="/suits">
            <div className="flex flex-col items-center bg-[#FDE8E9]">
              <Image
                src={bespokeImage}
                alt="Shirts"
                width={300}
                height={300}
                className="w-full h-[320px] object-cover border-b border-red-600"
              />
              <p className="mt-4 px-4 py-2 text-center font-semibold">Suits</p>
            </div>
          </Link>
        </div>
        <div className="border border-red-600">
          <Link href="/jackets">
            <div className="flex flex-col items-center bg-[#FDE8E9]">
              <Image
                src={bespokeImage2}
                alt="Shirts"
                width={300}
                height={300}
                className="w-full h-[320px] object-cover border-b border-red-600"
              />
              <p className="mt-4 px-4 py-2 text-center font-semibold">
                Jackets
              </p>
            </div>
          </Link>
        </div>
        <div className="border border-red-600">
          <Link href="/other-product">
            <div className="flex flex-col items-center bg-[#FDE8E9]">
              <Image
                src={bespokeImage3}
                alt="Shirts"
                width={300}
                height={300}
                className="w-full h-[320px] object-cover border-b border-red-600"
              />
              <p className="mt-4 px-4 py-2 text-center font-semibold">Others</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BespokeSection;
