// import React from "react";

// const Home = () => {
//   return (
//     <div className=" w-full min-h-screen  flex items-center justify-center">
//       Home
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { BlogList } from "../Components";
// import ArticleCard from "./ArticleCard";

const Home = () => {
  return (
    <main className="pt-6 pb-10">
      <BlogList />
    </main>
  );
};

export default Home;
