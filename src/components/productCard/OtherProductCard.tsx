"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = {
  imageSrc: string | StaticImageData;
  title: string;
  id: number;
};

const OtherProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, id }) => {
  return (
    <Card className="w-full container overflow-hidden ">
      <CardContent className="p-0">
        <Link href={`/other-product-details/${id}`}>
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-80 object-cover rounded-[8px]"
            width={320}
            height={320}
          />
        </Link>
        <div className="py-4 text-start">
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherProductCard;
