"use client";
import { links } from "@/public/assets/links";
import React, { useState } from "react";

function SlideHome({ children }: any) {
  const [index, setIndex] = useState(0);

  function autoSlide() {
    const lastIndex = links.length - 1;
    setTimeout(() => {
      index == lastIndex ? setIndex(0) : setIndex(index + 1);
    }, 2000);
  }
  autoSlide();

  return (
    <div
      style={{ backgroundImage: `url(${links[index].image})` }}
      className="mr-2 flex h-full justify-center rounded-sm bg-cover bg-center text-center duration-500"
    >
      {children}
    </div>
  );
}

export default SlideHome;
