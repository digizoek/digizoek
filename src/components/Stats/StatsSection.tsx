import React from "react";

interface StatProps {
  value: string | number;
  unit?: string;
  description: string;
}

interface StatsSectionProps {
  stats: StatProps[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row">
      {stats.map((stat, index) => (
        <React.Fragment >
          <div className="flex w-72 flex-col items-center py-8 sm:py-0">
            <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
              <span>{stat.value}</span>
              {stat.unit && <span>{stat.unit}</span>}
            </p>
            <p className="max-w-48 text-center text-neutral-600">{stat.description}</p>
          </div>
          {index < stats.length - 1 && (
            <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsSection;
