// const Navbar = () => {
//   return (
//     <header className="fixed top-0 z-20 px-2 py-4">
//       <div className="flex items-center justify-center space-x-7">
//         <a className="text-[#89F2EB] text-3xl font-bold" href="/">
//           Tech News
//         </a>
//         <span className="text-lg font-semibold capitalize">
//           Latest Tech News
//         </span>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect } from "react";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const { y } = useWindowScroll();

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const scrolled = y > 0;
      header.classList.toggle("bg-black-transparent", scrolled);
      header.classList.toggle("bg-transparent", !scrolled);
    }
  }, [y]);

  return (
    <header className="fixed top-0 w-full z-20 px-2 py-4 bg-[#09090B]border-b border-gray-800">
      <div className="text-center  flex justify-center items-center space-x-12">
        <h1 className="text-[#89F2EB] text-3xl font-bold">
          🌐 Our Blue Marble
        </h1>
        <p className="text-gray-400 text-sm">
          Thoughts and images from our amazing planet.
        </p>
      </div>
    </header>
  );
};

export default Navbar;
