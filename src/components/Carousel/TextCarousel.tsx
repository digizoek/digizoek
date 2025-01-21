// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import servicesCarouselData from '@/data/servicesCarouselData.json';
import { motion } from 'framer-motion';

type Item = {
  id: string;
  title: string;
  description: string;
  address?: string;
};

interface TextCarouselProps {
  slug: string;
}

function TextCarousel({ slug }: TextCarouselProps) {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    // Find the service based on the slug
    const serviceData = servicesCarouselData[slug];
    if (serviceData) {
      setFilteredItems(serviceData.subcategories);
    }
    
  }, [slug]);


  return (
    <div className="w-full bg-black overflow-hidden pt-10 p-10 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center h-30">
        <h2 className="font-bold text-white py-2 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          <span>Our <span className="!normal-case">{servicesCarouselData[slug].heading}</span> {" "}Services</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-black">
      {filteredItems.map((item, index) => (
        
        <div
            key={index || item.id}
            className="min-w-[25rem] p-6 bg-black border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-lg text-white">{item.description}</p>
          </div>
      ))}
    </div>
    </div>
  );
}

export default TextCarousel;
