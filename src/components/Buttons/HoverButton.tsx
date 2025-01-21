// components/Button.tsx
import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface HoverButtonProps {
  label: string;
  href: string; // Added href prop for link functionality
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  label,
  href,
  backgroundColor = "bg-neutral-200",
  textColor = "text-black",
  icon,
  ariaLabel = "button",
}) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <span
        className={clsx(
          "group flex h-15 w-65 items-center gap-2 rounded-full pl-3 pr-4 transition-all duration-300 ease-in-out",
          backgroundColor,
          textColor,
          "hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
        )}
      >
        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
          {icon || (
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </span>
        <span className="text-xl">{label}</span>
      </span>
    </Link>
  );
};

export default HoverButton;
