"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path based on your ShadCN setup

export default function FaqPage() {
  const items = [
    {
      id: 1,
      title: "Elegant Black Suit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 2,
      title: "Classic Blue Dress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 3,
      title: "Leather Brown Jacket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 4,
      title: "White Cotton Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 5,
      title: "Red Silk Scarf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 6,
      title: "Gray Wool Coat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 7,
      title: "Casual Denim Jeans",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 8,
      title: "Green Velvet Blazer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 9,
      title: "Black Leather Boots",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
    {
      id: 10,
      title: "Beige Trench Coat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt porta laoreet. Praesent a leo et leo ornare mollis quis quis erat. Integer aliquam dapibus justo at dapibus. Aliquam erat volutpat. Quisque tincidunt ex purus, id fringilla metus mollis quis. In hac habitasse platea dictumst. Cras feugiat in purus at lobortis.",
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-white lg:py-[85px] md:py-[60px] py-[50px]">
      <div className="flex justify-center  flex-col md:flex-row gap-4 sm:gap-6 md:gap-[30px]">
        {/* Product Image */}
        <div className="w-full md:w-1/3 pr-0 lg:mt-6 mt-0 md:pr-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/_next/static/media/productImage.6f417e8d.png" // Replace with your image path
              alt="Product Image"
              width={300}
              height={300}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* List Section */}
        <div className="w-full md:w-2/3">
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={[`item-${items[0]?.id}`]}
          >
            {items.map((item) => (
              <AccordionItem
                className="border-b border-gray-700 py-2 sm:py-3"
                key={item.id}
                value={`item-${item.id}`}
              >
                <AccordionTrigger className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[120%] text-[#212121] hover:no-underline">
                  {item.id}. {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base font-semibold leading-[180%] text-[#212121]">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}