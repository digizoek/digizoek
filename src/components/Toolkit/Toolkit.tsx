import React from "react";

interface Tool {
  name: string;
  imageSrc: string;
  altText: string;
}

interface ToolkitProps {
  heading: string;
  description: string;
  tools: Tool[];
}

const Toolkit: React.FC<ToolkitProps> = ({ heading, description, tools }) => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">{heading}</h2>
          <p className="text-gray-700 text-center mb-8">{description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 mb-2">
                  <img
                    src={tool.imageSrc}
                    alt={tool.altText}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-medium">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
