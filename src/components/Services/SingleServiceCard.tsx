import React from "react";
import { ArrowRight } from 'lucide-react';

// Define the types for the props
interface SingleServiceCardProps {
  title: string;
  description: string;
  subheadings: string[];
}

const SingleServiceCard: React.FC<SingleServiceCardProps> = ({
  title,
  description,
  subheadings,
}) => {
  return (
    <div className="p-4 bg-gray-50 h-[100%] rounded-2xl shadow-lg max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-black mb-3 text-gray-800 text-center tracking-wide">
        {title}
      </h2>

      {/* Description */}
      <p className="mb-6 text-gray-600 text-base leading-7 text-center font-light">
        {description}
      </p>

      {/* Subheadings with new design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 text-base text-gray-800 font-medium">
        {subheadings.map((subheading, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 mb-4 cursor-pointer p-2 transition-all duration-300 ease-in-out hover:text-blue-600"
          >
            {/* Circle with arrow */}
            <div className="w-7 h-7 bg-blue-600 rounded-full flex justify-center items-center">
              <span className="text-white"><ArrowRight/></span>
            </div>

            {/* Subheading text */}
            <span className="text-md font-medium">{subheading}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleServiceCard;
