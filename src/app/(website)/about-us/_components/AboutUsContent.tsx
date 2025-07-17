import Image from "next/image";
import aboutImage from "@/public/images/aboutImage.png";

const AboutUsContent = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 container mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <div>
            <h2 className="lg:text-[40px] md:text-[30px] text-[24px] font-semibold leading-[120%] text-black mb-5 md:mb-7 lg:mb-10">
              About Us
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.
              Morbi condimentum porttitor turpis sed ultrices. Suspendisse
              auctor faucibus magna, imperdiet maximus orci ultricies a. Cras
              placerat elit a sagittis tristique. Etiam imperdiet pulvinar nisi
              in pellentesque.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.
            </p>
          </div>


          <div>
            <h2 className="lg:text-[30px] md:text-[24px] text-[20px] font-semibold leading-[120%] text-black mb-5 md:mb-7 lg:mb-10">
              Our MIssion
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.
              Morbi condimentum porttitor turpis sed ultrices. Suspendisse
              auctor faucibus magna, imperdiet maximus orci ultricies a. Cras
              placerat elit a sagittis tristique. Etiam imperdiet pulvinar nisi
              in pellentesque.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis
              ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.
            </p>
          </div>


          <div className="flex space-x-10 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">30K+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">12K+</p>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 text-sm md:text-base">
            <li>Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.</li>
            <li>Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.</li>
            <li>Lorem ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget euismod velit. Ut dapibus est urna. Suspendisse dictum facilisis ullamcorper. Maecenas vitae efficitur tortor, in placerat dui.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Commitment
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed md:text-base max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            auctor nisi. Ut dapibus est urna. Suspendisse dictum facilisis
            loremcorper. Maecenas vitae efficitur tortor, in placerat dui.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] h-[600px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={aboutImage}
              alt="Team working together"
              width={400}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
