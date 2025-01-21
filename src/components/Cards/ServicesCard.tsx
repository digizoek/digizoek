import React from 'react';
import ArrowHoverBtn from '../Buttons/ArrowHoverBtn';
import BounceButton from '../Buttons/BounceButton';


type CardProps = {
  title: string;
  description: string;
  buttonLabels?: string[];
  className?: string;
  href: string;
};

const ServicesCard: React.FC<CardProps> = ({
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
      <div className="flex flex-col h-full">
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
            {buttonLabels.length > 0 &&
              <div className="flex flex-wrap">
                {buttonLabels.map((label, index) => (
                  <div
                    key={index || label}
                    className="bg-transparent text-black border-black py-1.5 px-3 font-semibold mr-2 mb-2 cursor-pointer rounded-full lg:text-sm text-[13px] border"
                  >
                    {label}
                  </div>
                ))}
              </div>
            }
            <div className="mt-4 flex flex-col items-center gap-4 h-auto">
            <ArrowHoverBtn
                href={href}
                text="View Details"
                arrowPosition="right"
                width="200px"
                />
              <BounceButton text="Discuss Your Needs" height='50px' width='200px' href={`/contact`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
