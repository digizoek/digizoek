import React from 'react';

interface MainHeadingProps {
  mainText: string;
  highlightText: string;
  subText: string;
  buttonText: string;
  fontWeight: string;
  primaryColor: string;
  secondaryColor: string;
  width: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({
  mainText,
  highlightText,
  subText,
  buttonText,
  fontWeight = 'black',
  primaryColor,
  secondaryColor,
  width = 'w-full',
}) => {
  return (
    <div className={`flex md:justify-between items-center h-[20vh] items-center ${width} flex-col md:flex-row gap-4`}>
      <div className="heading-color flex gap-2">
        <h2 className={`md:text-6xl text-3xl font-${fontWeight} ${primaryColor}`}>{mainText}</h2>
        <h2 className={`md:text-6xl text-3xl font-${fontWeight} ${secondaryColor}`}>{highlightText}</h2>
        <h2 className={`md:text-6xl text-3xl font-${fontWeight} ${primaryColor}`}>{subText}</h2>
      </div>
      <button className="md:px-6 md:py-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
        {buttonText}
      </button>
    </div>
  );
};

export default MainHeading;
