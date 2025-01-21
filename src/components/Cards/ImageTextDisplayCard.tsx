import React from "react";
import { FaArrowRight } from "react-icons/fa";
import MainHeading from "../Headings/MainHeading";

// TypeScript interface for service data
interface Service {
  name: string;
  description: string;
  image: string;
}

const serviceData: Service[] = [
  {
    name: "CMS Development",
    description: "Solutions for digital business challenges through Wordpress Shopify Magento.",
    image: ""
    // image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
  },
  {
    name: "Mobile Development",
    description: "Crafting user-friendly mobile applications for various platforms.",
    image: ""
    // image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
  },
  {
    name: "Web Development",
    description: "Comprehensive web solutions tailored for business needs.",
    image: ""
    // image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
  },
  {
    name: "AI & ML Integration",
    description: "Leveraging AI and machine learning for smarter operations.",
    image: ""
    // image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
  },
  {
    name: "Product & UX/UI Design",
    description: "Designing engaging user experiences for your products.",
    image: ""
    // image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80"
  },
  {
    name: "Medical Billing Solutions",
    description: "Building scalable software solutions for startups.",
    image: ""
    // image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
  },
  {
    name: "Logistics Solutions",
    description: "Streamlined logistics and supply chain management services.",
    image: ""
    // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
  },
  {
    name: "E-Commerce Development",
    description: "Creating complete e-commerce platforms tailored to business.",
    image: ""
    // image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
  },
  {
    name: "Digital Display Services",
    description: "Innovative digital display solutions for compelling marketing.",
    image: ""
    // image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
  }
];

// ServiceCard component with prop types
const ServiceCard: React.FC<Service> = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          <button
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            aria-label={`Contact us for ${name}`}
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            aria-label={`View details of ${name}`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

// ServiceCardList component
const ImageTextDisplayCard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <MainHeading
        mainText="What"
        highlightText="Digi Zoek"
        subText="DO?"
        buttonText="Book a Meeting"
        fontWeight="bold"
        primaryColor="text-gray-900"
        secondaryColor="text-[#006bff]"
        width = "w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
          <ServiceCard
            
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageTextDisplayCard;
