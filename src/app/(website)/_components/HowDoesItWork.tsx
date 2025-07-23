/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, CreditCard, Package } from 'lucide-react';
import Image from 'next/image';
import number1 from "@/public/images/number1.png";
import number2 from "@/public/images/number2.png";
import number3 from "@/public/images/number3.png";

interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  numberColor: string;
  numberImage: any;
}

const Step: React.FC<StepProps> = ({ title, description, icon, bgColor, numberImage }) => {
  return (
    <div className="relative">
      <Card className={`${bgColor} border-0 shadow-sm h-full rounded-[8px]`}>
        <CardContent className="p-6">
          <div className="flex flex-col items-start space-y-4">
            {/* Step number image */}
            <div className={`absolute top-4 right-6 opacity-20`}>
              <Image src={numberImage} alt="number" width={80} height={80} />
            </div>

            {/* Icon */}
            <div className="relative z-10">
              {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 relative z-10">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const HowDoesItWork: React.FC = () => {
  const steps: StepProps[] = [
    {
      title: "Create your design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend. Vivamus ut hendrerit neque. Nunc nec eleifend magna. ",
      icon: <Shirt className="w-12 h-12 text-gray-700" strokeWidth={1.5} />,
      bgColor: "bg-blue-50",
      numberColor: "#E9F4FF",
      numberImage: number1
    },
    {
      title: "Create your order",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend. Vivamus ut hendrerit neque. Nunc nec eleifend magna. ",
      icon: <CreditCard className="w-12 h-12 text-gray-700" strokeWidth={1.5} />,
      bgColor: "bg-green-50",
      numberColor: "text-green-200",
      numberImage: number2
    },
    {
      title: "Receive Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend. Vivamus ut hendrerit neque. Nunc nec eleifend magna. ",
      icon: <Package className="w-12 h-12 text-gray-700" strokeWidth={1.5} />,
      bgColor: "bg-red-50",
      numberColor: "text-red-200",
      numberImage: number3
    }
  ];

  return (
    <section className="py-[88px] px-4 container mx-auto">
      <div className="mb-12">
        <h2 className="lg:text-[40px] md:text-[30px] text-[20px] font-semibold leading-[120%] text-[#000000] mb-[40px]">
          How does it work?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowDoesItWork;
