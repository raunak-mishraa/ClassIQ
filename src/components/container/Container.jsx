import React from "react";
function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
      {children}
    </div>
  );
}

export default Container;
