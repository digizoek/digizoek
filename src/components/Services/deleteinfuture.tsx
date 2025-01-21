import React from 'react';
import ArrowHoverBtn from '../Buttons/ArrowHoverBtn';

type CardProps = {
  title: string;
  description: string;
  buttonLabels?: string[];
  className?: string;
  href: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonLabels = [],
  className = '',
  href,
}) => {
  return (
    <div
      className={`group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#006bff] hover:shadow-[0_0_0_3px_#006bff] duration-500 ${className}`}
    >
      <a className="flex flex-col h-full" href={href}>
        <h3 className="font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
          {title}
        </h3>
        <div className="flex flex-col justify-between h-full">
          <div className="mb-[50px] mt-5 2xl:h-[128px]">
            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              {description}
            </p>
          </div>
          <div>
            {buttonLabels.length > 0 ? (
              <div className="flex flex-wrap">
                {buttonLabels.map((label, index) => (
                  <div
                    
                    className="bg-transparent text-black border-black py-1.5 px-3 font-semibold mr-2 mb-2 cursor-pointer rounded-full lg:text-sm text-[13px] border"
                  >
                    {label}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Click the "View Details" button to explore what Digizoek can do.</p>
            )}
            <div className="mt-4">
              <ArrowHoverBtn href={href} text="View More" arrowPosition="right" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
