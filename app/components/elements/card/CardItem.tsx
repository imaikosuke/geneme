import Image from 'next/image';
import React, { FC } from 'react';

interface CardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const CardItem: FC<CardItemProps> = ({ title, description, imageUrl, className = '' }) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${className}`}
    >
      <Image className="w-full" src={imageUrl} alt="Sunset in the mountains" width={500} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
