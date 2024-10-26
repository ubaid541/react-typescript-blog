import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the World's Natural Wonders: A Nature Lover's Journey",
      author: "John Doe",
      date: "May 30, 2023",
      excerpt:
        "As someone who loves nature, there's nothing quite like the thrill of exploring the world's most beautiful landscapes. From snow-capped mountains to crystal-clear waters, there's no shortage of natural wonders to discover.",
      image: "https://via.placeholder.com/500x300", // Replace with actual image URL
      tags: ["ENVIRONMENT", "CLIMATE"],
    },
    {
      id: 2,
      title: "The Mysteries of the Deep Sea: An Underwater Adventure",
      author: "Jane Smith",
      date: "June 10, 2023",
      excerpt:
        "Dive into the depths of the ocean and explore the mysterious world beneath the waves. From colorful coral reefs to strange deep-sea creatures, this journey reveals the secrets of the underwater world.",
      image: "https://via.placeholder.com/500x300", // Replace with actual image URL
      tags: ["OCEAN", "WILDLIFE"],
    },
    {
      id: 3,
      title: "Forests of the World: Discovering the Lungs of Our Planet",
      author: "Alex Johnson",
      date: "July 15, 2023",
      excerpt:
        "Forests are essential to life on Earth, providing oxygen, shelter, and biodiversity. Join us as we explore some of the world's most stunning forests and learn about their crucial role in sustaining our planet.",
      image: "https://via.placeholder.com/500x300", // Replace with actual image URL
      tags: ["FOREST", "NATURE"],
    },
    {
      id: 4,
      title: "The Arctic Tundra: Surviving in One of the Harshest Environments",
      author: "Chris Evans",
      date: "August 20, 2023",
      excerpt:
        "The Arctic tundra is one of the most extreme environments on Earth. Discover the unique adaptations of plants and animals that survive in these icy landscapes and the importance of preserving this fragile ecosystem.",
      image: "https://via.placeholder.com/500x300", // Replace with actual image URL
      tags: ["ARCTIC", "CLIMATE CHANGE"],
    },
    {
      id: 5,
      title: "Volcanoes: Earth's Fiery Temper",
      author: "Emily Clark",
      date: "September 5, 2023",
      excerpt:
        "Volcanoes are powerful natural phenomena that shape landscapes and create new land. Explore the science behind volcanic eruptions and the impact they have on our environment and communities.",
      image: "https://via.placeholder.com/500x300", // Replace with actual image URL
      tags: ["VOLCANOES", "GEOLOGY"],
    },
  ];

  return (
    <div className="mt-16">
      {blogs?.length > 0 ? (
        blogs?.map((blog) => (
          <div key={blog?.id}>
            <BlogCard blog={blog} />
          </div>
        ))
      ) : (
        <h1> No blogs </h1>
      )}
    </div>
  );
};

export default BlogList;
