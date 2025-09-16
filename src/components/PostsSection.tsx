import React from "react";
import Masonry from "react-masonry-css";
import post1 from "../assets/post img.jpg";

const posts = [
  {
    id: 1,
    title: "An Everyday Man Working For Everyday People",
    author: "John Maman",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "https://example.com/post-1",
    image: post1,
  },
  {
    id: 2,
    title: "Empowering Communities For A Better Future",
    author: "Sarah Johnson",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    link: "https://example.com/post-2",
    image: post1,
  },
  {
    id: 3,
    title: "Building Trust With Every Step",
    author: "Michael Brown",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    link: "https://example.com/post-3",
    image: post1,
  },
  {
    id: 4,
    title: "Leadership That Inspires",
    author: "Emily Davis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    link: "https://example.com/post-4",
    image: post1,
  },
  {
    id: 5,
    title: "Innovation For A Better Tomorrow",
    author: "David Clark",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    link: "https://example.com/post-5",
    image: post1,
  },
  {
    id: 6,
    title: "A Vision For Positive Change",
    author: "Sophia Martinez",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    link: "https://example.com/post-6",
    image: post1,
  },
  {
    id: 7,
    title: "Strength Through Unity",
    author: "James Wilson",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    link: "https://example.com/post-7",
    image: post1,
  },
  {
    id: 8,
    title: "Hope, Hard Work, And Progress",
    author: "Olivia Garcia",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: "https://example.com/post-8",
    image: post1,
  },
  {
    id: 9,
    title: "Creating Opportunities For All",
    author: "Benjamin Lee",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "https://example.com/post-9",
    image: post1,
  },
  {
    id: 10,
    title: "Building A Brighter Future Together",
    author: "Ava Thompson",
    description:
      "Culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus.",
    link: "https://example.com/post-10",
    image: post1,
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

const PostsSection: React.FC = () => {
  return (
    <section className="w-full 2xl:py-28 py-16">
      <div className="px-5 2xl:px-20 lg:px-10">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-6"
          columnClassName="masonry-column space-y-6"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition transform hover:-translate-y-1 border-[5px] border-[#00ff99]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                <span className="block text-xs text-gray-500 mb-4">
                  {post.author}
                </span>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default PostsSection;
