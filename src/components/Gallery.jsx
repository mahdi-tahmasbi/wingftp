"use client";

import { useState } from "react";
import Image from "next/image";

const CarouselGallery = () => {
  const images = [
    "/images/image.svg", // تصویر اول
    "/images/logo.png", // تصویر اول
    "/images/image.svg", // تصویر اول
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]); // تصویر پیش‌فرض
  return (
    <div className="bg-white flex gap-10" dir="ltr">
      {/* تصاویر کوچک سمت چپ */}
      <div className="flex flex-col gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-[120px] h-[120px] relative cursor-pointer ${
              selectedImage === src ? "ring-4 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="rounded-md hover:scale-105 transition-transform  object-contain"
            />
          </div>
        ))}
      </div>

      {/* تصویر بزرگ سمت راست */}
      <div className="flex-1">
        <div className="relative w-[100%] h-[100%] object-contain">
          <Image
            src={selectedImage}
            alt="Selected Image"
            fill
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselGallery;
