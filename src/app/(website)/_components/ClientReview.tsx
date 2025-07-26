"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import personImage from "@/public/images/customCardImage.png";

type Review = {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl: any;
  role: string;
  rating: number;
  comment: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    imageUrl: personImage,
    rating: 5,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
  {
    id: 2,
    name: "Emily Stone",
    role: "Customer",
    imageUrl: personImage,
    rating: 4,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Customer",
    imageUrl: personImage,
    rating: 5,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Customer",
    imageUrl: personImage,
    rating: 5,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Customer",
    imageUrl: personImage,
    rating: 4,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
  {
    id: 6,
    name: "Sarah White",
    role: "Customer",
    imageUrl: personImage,
    rating: 5,
    comment:
      "Our Client ReviewRobert FoxRobert FoxRobert Fox Customer Customer Customer “Good Experience” “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue viverra, ullamcorper dolor at, luctus libero. Maecenas suscipit, nisl quis pellentesque laoreet, nibh neque congue dui, ut gravida.",
  },
];

const ClientReview: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="container mx-auto lg:py-12 px-4 lg:px-0 md:px-0">
      <h2 className="lg:text-[40px] md:text-[30px] text-[28px] font-semibold leading-[120%] text-[#000000] mb-[40px]">
        Our Client Review
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1, // Ensure one item scrolls at a time for autoplay consistency
        }}
        className="container mx-auto"
        setApi={setApi}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="w-full basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="w-full bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between gap-4 p-4">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={review.imageUrl}
                      alt={`${review.name}'s profile`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <CardTitle className="text-base font-medium text-[#212121] leading-[120%]">
                        {review.name}
                      </CardTitle>
                      <p className="text-[14px] font-medium text-[#4E4E4E] leading-[120%]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 text-base leading-[150%] text-center text-[#212121] font-normal ">
                  <p className="">{review.comment}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" /> */}
      </Carousel>
    </div>
  );
};

export default ClientReview;
