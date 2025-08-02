import Image from "next/image";
import aboutImage from "@/Public/images/aboutImage.png";

const AboutUsContent = () => {
  return (
    <section className="py-6 sm:py-8 md:py-9 lg:py-12 px-4 sm:px-6 md:px-6 lg:px-8 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 md:gap-10 mx-auto">
        {/* Text Section */}
        <div className="w-full flex-1 mt-6 sm:mt-8 md:mt-10">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-semibold leading-[120%] text-black mb-4 sm:mb-5 md:mb-7 lg:mb-10">
            About Us
          </h2>

          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
            ullamcorper. Maecenas vitae efficitur tortor, in placerat dui. Morbi
            condimentum porttitor turpis sed ultrices. Suspendisse auctor
            faucibus magna, imperdiet maximus orci ultricies a. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed eget euismod velit.
            Ut dapibus est urna. Suspendisse dictum facilisis ullamcorper.
            Maecenas vitae efficitur tortor, in placerat dui. Morbi condimentum
            porttitor turpis sed ultrices. Suspendisse auctor faucibus magna,
            imperdiet maximus orci ultricies a. Cras placerat elit a sagittis
            tristique. Etiam imperdiet pulvinar nisi in pellentesque.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-[120%] text-black mb-3 sm:mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
            ullamcorper. Maecenas vitae efficitur tortor, in placerat dui. Morbi
            condimentum porttitor turpis sed ultrices. Suspendisse auctor
            faucibus magna, imperdiet maximus orci ultricies a. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed eget euismod velit.
            Ut dapibus est urna. Suspendisse dictum facilisis ullamcorper.
            Maecenas vitae efficitur tortor, in placerat dui. Morbi condimentum
            porttitor turpis sed ultrices. Suspendisse auctor faucibus magna,
            imperdiet maximus orci ultricies a.
            <br className="block sm:hidden" />
            <br />
            Morbi condimentum porttitor turpis sed ultrices. Suspendisse auctor
            faucibus magna, imperdiet maximus orci ultricies a.
          </p>

          <div className="flex flex-wrap justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 mt-12 sm:mt-16">
            {/* Happy Clients */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <p className="text-[24px] sm:text-[30px] md:text-[38px] lg:font-bold lg:text-[48px] font-semibold leading-[120%]">
                30K+
              </p>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#000000] font-semibold leading-[120%]">
                Happy Clients
              </p>
            </div>

            {/* Satisfied Customers */}
            <div className="text-center flex-1 min-w-[120px] sm:min-w-[150px]">
              <p className="text-[24px] sm:text-[30px] md:text-[38px] lg:font-bold lg:text-[48px] font-semibold leading-[120%]">
                12K+
              </p>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#000000] font-semibold leading-[120%]">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex">
          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src={aboutImage}
              alt="Team working together"
              width={400}
              height={400}
              className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        <div>
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-[120%] text-black mb-3 sm:mb-4">
            What We Offer
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            <p className="space-y-3 sm:space-y-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse
              dictum facilisis ullamcorper.
            </p>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna.
            </li>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna. Lorem ipsum:illons
            </li>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna. Lorem ipsum: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus
              est urna.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-[120%] text-black mb-3 sm:mb-4">
            Empowering Local Businesses
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            <p className="space-y-3 sm:space-y-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse
              dictum facilisis ullamcorper.
            </p>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna.
            </li>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna. Lorem ipsum: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus
              est urna.
            </li>
            <li>
              Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget euismod velit. Ut dapibus est urna. Lorem ipsum:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Lorem ipsum: Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut
              dapibus est urna. Lorem ipsum: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus
              est urna. Lorem ipsum: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eget euismod velit. Ut dapibus est urna.
            </li>
          </ul>
        </div>

        <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-semibold leading-[120%] text-black mb-3 sm:mb-4">
          Our Commitment
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          auctor nisi. Ut dapibus est urna. Suspendisse dictum facilisis
          loremcorper. Maecenas vitae efficitur tortor, in placerat dui.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
          ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse
          dictum facilisis ullamcorper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
          ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse
          dictum facilisis ullamcorper.
        </p>
      </div>
    </section>
  );
};

export default AboutUsContent;
