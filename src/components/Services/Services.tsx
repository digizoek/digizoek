"use client"
import { useState } from "react";
import ServicesData from './ServicesData'; // Import the ServicesData
import MainHeading from "../Headings/MainHeading";
import ArrowHoverBtn from "../Buttons/ArrowHoverBtn";
import BounceButton from "../Buttons/BounceButton";
import MobileServicesTab from '../Cards/ServicesCard';
import SingleServiceCard from "./SingleServiceCard";

// Import icons
import { DraftingCompass, MonitorSmartphone, TabletSmartphone, BrainCircuit, ShoppingCart, Atom, Hexagon } from "lucide-react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(ServicesData[0].id);

  const currentTab = ServicesData.find((tab) => tab.id === activeTab);

  // Map icon names to actual icon components
  const iconMapping = {
    DraftingCompass: DraftingCompass,
    MonitorSmartphone: MonitorSmartphone,
    TabletSmartphone:TabletSmartphone,
    BrainCircuit: BrainCircuit,
    ShoppingCart: ShoppingCart,
    Atom: Atom,
    Hexagon: Hexagon,
  };

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
        width="w-full"
      />
    
      <div className="flex container flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-6 justify-center items-center">
        {/* Left Tabs */}
        <div className="flex flex-wrap justify-center h-full  md:h-[50%] gap-4 w-full md:w-[43%]">
          {ServicesData.map((tab) => {
            const IconComponent = iconMapping[tab.icon]; // Get the correct icon component
            return (
              <div key={tab.id}>
                <button
                  className={`md:flex hidden items-center p-4 rounded-[2rem] h-[11em] w-[11em] border flex flex-col justify-center transition-all hover:bg-blue-200 ${
                    activeTab === tab.id ? "bg-blue-500 text-white border-blue-500" : "border-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent className={`mr-3 text-[5em] service-icon ${activeTab === tab.id ? "text-white" : "text-blue-500"}`} />
                  <span className={`font-medium text-lg ${activeTab === tab.id ? "text-white" : "text-gray-700 "}`}>{tab.title}</span>
                </button>

                <MobileServicesTab
                  title={tab.title}
                  description={tab.mobileDesc}
                  buttonLabels={tab.buttonLabels}
                  className="md:hidden flex"
                  href ={`/services/${tab.id}`}
                />
              </div>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="w-[57%] p-6 rounded-lg overflow-auto hidden md:flex flex-col space-y-4 bg-gray-100 h-[67vh]">
        {currentTab && (
            <>
              <SingleServiceCard
                title={currentTab.heading}
                description={currentTab.description}
                subheadings={currentTab.subCategories} // passing buttonLabels as subheadings
              />
              
              <div className="flex gap-4">
                <BounceButton  text="View Details"  height='50px' width='180px' href={`/services/${currentTab.id}`} />
                <ArrowHoverBtn
                  text="Schedule Call"
                  arrowPosition="right"
                  width="200px"
                  href={`/contact`}
                  />
              </div>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}
