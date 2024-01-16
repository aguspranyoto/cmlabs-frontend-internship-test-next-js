import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

interface CardItemProps {
  title: string;
  link: string;
  image: string;
}

const CardItem: FC<CardItemProps> = ({ title, link, image }) => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <Link href={link}>
        <h1 className="bg-black bg-opacity-30 absolute w-full h-full text-white font-bold flex justify-center items-center hover:bg-opacity-10 ">
          {title}
        </h1>
        <Image
          className="w-[140px] h-[160px] md:w-[210px] md:h-[160px] object-cover"
          priority
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default CardItem;
