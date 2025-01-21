import React from 'react';
import Link from 'next/link';

function CreativeBtnAnimate({ href = "/contact", buttonText = "Our Work", background = "bg-#006bff", textColor = "text-white", hoverBgColor = "bg-[#2442b7]", className = "" }) {
  return (
    <>
      <div className={`group relative cursor-pointer p-2 w-32 border ${className} ${background} ${textColor} rounded-full overflow-hidden text-center font-semibold `}>
        <Link
          className={`translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block`}
          href={href}
        >
          {buttonText}
        </Link>
        <div className={`flex gap-2 text-white ${hoverBgColor} z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none`}>
          <Link href={href}>{buttonText}</Link>
        </div>
      </div>
    </>
  );
}

export default CreativeBtnAnimate;
