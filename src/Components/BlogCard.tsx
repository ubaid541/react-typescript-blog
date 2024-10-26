import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="mb-10">
      <img
        src={blog?.image}
        alt="blog image"
        className="mb-5 h-[400px] rounded-xl object-cover bg-no-repeat object-center"
      />

      <h1 className="pb-3 text-xl font-semibold tracking-tight capitalize ">
        {blog?.title}
      </h1>

      <div className="flex space-x-1 items-center mt-4 ">
        <img src={blog?.image} alt="author" className="h-6 w-6 rounded-full" />
        <span className="ml-5">by</span>
        <span className="ml-5 font-semibold text-[#B3ECC7]">
          {blog?.author}
        </span>
        <span className="ml-5 font-semibold ">on {blog?.date}</span>
      </div>

      <div className="py-6">
        <p className="text-zinc-400">{blog?.excerpt}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="#" className="text-[#B3ECC7] font-medium">
            <span>Read Article</span>
          </a>
          <FaLongArrowAltRight size={20} color={"#B3ECC7"} />
        </div>

        <div className="flex items-center space-x-2">
          {blog?.tags?.map((tag: any) => (
            <span className="rounded-full border border-zinc-700 py-1 px-3 bg-zinc-900 text-sm text-[#B3ECC7]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
