"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import img1 from "@/assets/imagenes/Carlola1.jpg";
import img2 from "@/assets/imagenes/CarLola2.jpg";
import img3 from "@/assets/imagenes/CarLola3.jpg";
import Image from "next/image";

export default function CarouselLola(){


  

 
  const autoSlide = true
  const autoSlideInterval = 3000

  const slides = [
    {id: 1, imagen:img1},
    {id: 2, imagen:img2} ,
    {id: 3, imagen:img3} ,

    ];

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative  rounded-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <Image key={img.id} src={img.imagen} alt="logo" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} className="md:size-4 sm:max-size-1" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} className="md:size-4"/>
        </button>
      </div>

    </div>
  );
}
