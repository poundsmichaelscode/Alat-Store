"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  hoverImage: string;
  discount?: string;
}

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
  hoverImage,
  discount,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = `Hello, I am interested in ${name} currently selling for ${price}`;

  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🔖 Discount Badge */}
      {discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {discount}
        </span>
      )}

      {/* 🖼 Image Swap */}
      <div className="relative w-full h-56">
        <Image
          src={isHovered ? hoverImage : image}
          alt={name}
          fill
          className="object-cover transition duration-300"
        />
      </div>

      {/* 📦 Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-purple-700 font-bold">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>

        {/* 🟢 WhatsApp CTA */}
        <a
          href={`https://wa.me/2349055515211?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          className="block mt-4 text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
