import React from "react";
import HoverButton from "../Buttons/HoverButton";
import StatsSection from "../Stats/StatsSection";

interface ServicesHeroSectionProps {
  backgroundImage: string; // URL for the background image
  pageTitle: string; // Main title text
  description: string; // Description text
}

const statsData = [
  { value: "100+", description: "Team Members" },
  { value: "5+", description: "Years Of Experience" },
  { value: "20+", description: "Industries Served" },
  { value: "50", description: "Projects Delivered" },
];


const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  backgroundImage,
  pageTitle,
  description,
}) => {
  return (
    <main>
      <section className="HalfTextContent-sec py-12">
        <div className=" mx-auto max-w-7xl px-6 pt-40 lg:grid lg:grid-cols-12 lg:px-8 lg:pt-[10rem]">
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <h1 className=" undefined pb-6 text-4xl font-bold tracking-[-2px] lg:-translate-y-[7px] lg:pb-[2.375rem] xl:text-5xl xl:!leading-[55px] 2xl:text-6xl 2xl:!leading-[65px]">
                {pageTitle}
              </h1>
            </div>
            <div className="flex flex-col gap-4">

            <p className="  undefined text-md text-black md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              {description}
            </p>
            <HoverButton
              label="Discuss Your Needs"
              backgroundColor="bg-main"
              textColor="text-white"
              ariaLabel="custom button"
              href = '/contact'
              />
            </div>
          </div>
          <div className="image mt-6 flex flex-col pl-5 items-end justify-start gap-4 md:gap-0 lg:col-span-4 lg:mt-0 lg:justify-evenly">
          <img src={backgroundImage} alt="Service 1" className=" w-full h-[70%] object-cover rounded-3xl" />
          <div className="mt-6 !flex hidden items-end justify-start gap-4 w-full lg:justify-evenly">
            
            <img
              className="undefined w-[170px]"
              src="/images/services/clutchimgR.svg"
              alt="Clutch Testimonials"
            />
            <img
              className="undefined w-[170px]"
              src="/images/services/goodfirms.svg"
              alt="Good Firms Testimonials"
            />
          </div>
          </div>
          
        </div>
      </section>
      {/* <img src={backgroundImage} alt={pageTitle} className="mt-8 lg:mt-24 w-full"></img> */}
      
      {/* <section id="project-stats" className="bg-black h-[100vh] text-white py-12 lg:py-24">
        <div className="undefined mx-auto max-w-7xl px-6 pb-8 lg:px-8 ">
              <h2 className=" pb-1 text-4xl font-bold md:pb-0  xl:text-5xl 2xl:text-6xl 2xl:!leading-[65px]">
                <span>why our clients love us.</span>
              </h2>
              <span>
              <StatsSection stats={statsData} />
              </span>
        </div>
        
      </section> */}
    </main>
  );
};

export default ServicesHeroSection;
