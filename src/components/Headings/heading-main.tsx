// Desc: HeadingMain component with prop types for title and button
function HeadingMain({ title = "Title", buttonText = " Book a Meeting" }) {
  return (
    <div className="flex justify-between items-center mb-12">
        <div className="sub-heading w-[50vw] flex flex-col ">
        <h2 className="text-6xl font-semibold text-gray-900">{title}</h2>
        {/* <p className=" pl-3 pt-3 text-xl ">We follow a structured approach for web and mobile development, with planning, testing, and execution stages. We work with clients to ensure software is reliable, secure, and user-friendly.</p> */}
        </div>
        <button className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
         {buttonText}
        </button>
      </div>
  );
}

export default HeadingMain;