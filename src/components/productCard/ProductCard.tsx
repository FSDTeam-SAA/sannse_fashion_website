"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  imageSrc: string | StaticImageData;
  title: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title }) => {
  return (
    <Card className="w-full container overflow-hidden ">
      <CardContent className="p-0">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-80 object-cover rounded-[8px]"
          width={320}
          height={320}
        />
        <div className="py-4 text-start">
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
