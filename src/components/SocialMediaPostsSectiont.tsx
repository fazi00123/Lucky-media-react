// import React from "react";

// const posts = [
//   {
//     id: 1,
//     userName: "Grzegorz Braun",
//     avatar: "",
//     image: "https://picsum.photos/400/250",
//     likes: 120,
//     comments: 15,
//     share: true,
//     rowSpan: 1,
//   },
//   {
//     id: 2,
//     userName: "User Two",
//     avatar: "https://i.pravatar.cc/50?img=2",
//     image: "https://picsum.photos/400/500",
//     likes: 250,
//     comments: 32,
//     share: true,
//     rowSpan: 2,
//   },
//   {
//     id: 3,
//     userName: "User Three",
//     avatar: "https://i.pravatar.cc/50?img=3",
//     image: "https://picsum.photos/400/220",
//     likes: 80,
//     comments: 10,
//     share: true,
//     rowSpan: 1,
//   },
//   {
//     id: 4,
//     userName: "Włodzimierz Skalik",
//     avatar: "https://i.pravatar.cc/50?img=4",
//     image: "https://picsum.photos/400/500",
//     likes: 310,
//     comments: 41,
//     share: true,
//     rowSpan: 2,
//   },
//   {
//     id: 5,
//     userName: "User Five",
//     avatar: "https://i.pravatar.cc/50?img=5",
//     image: "https://picsum.photos/400/250",
//     likes: 150,
//     comments: 20,
//     share: true,
//     rowSpan: 1,
//   },
//   {
//     id: 6,
//     userName: "User Six",
//     avatar: "https://i.pravatar.cc/50?img=6",
//     image: "https://picsum.photos/400/250",
//     likes: 95,
//     comments: 12,
//     share: true,
//     rowSpan: 1,
//   },
//   {
//     id: 7,
//     userName: "Włodzimierz Skalik",
//     avatar: "https://i.pravatar.cc/50?img=7",
//     image: "https://picsum.photos/400/500",
//     likes: 410,
//     comments: 53,
//     share: true,
//     rowSpan: 2,
//   },
//   {
//     id: 8,
//     userName: "User Eight",
//     avatar: "https://i.pravatar.cc/50?img=8",
//     image: "https://picsum.photos/400/230",
//     likes: 120,
//     comments: 18,
//     share: true,
//     rowSpan: 1,
//   },
//   {
//     id: 9,
//     userName: "User Nine",
//     avatar: "https://i.pravatar.cc/50?img=9",
//     image: "https://picsum.photos/400/250",
//     likes: 200,
//     comments: 25,
//     share: true,
//     rowSpan: 1,
//   },
// ];

// const SocialMediaPostsSection = () => {
//   return (
//     <section className="bg-white p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className={`bg-white rounded-xl shadow-md border-[6px] border-[#00FF9C] overflow-hidden row-span-${post.rowSpan}`}
//           >
//             {/* User info */}
//             <div className="flex items-center gap-3 p-3">
//               <img
//                 src={post.avatar}
//                 alt={post.userName}
//                 className="w-10 h-10 rounded-full border border-gray-300"
//               />
//               <span className="font-semibold text-gray-700">{post.userName}</span>
//             </div>

//             {/* Post Image */}
//             <img src={post.image} alt={`Post ${post.id}`} className="w-full h-full object-cover" />

//             {/* Engagement */}
//             <div className="flex justify-between items-center px-4 py-2 text-gray-600 text-sm">
//               <span>
//                 <i className="fa-solid fa-heart text-red-500"></i> {post.likes}
//               </span>
//               <span>
//                 <i className="fa-solid fa-comment text-blue-500"></i> {post.comments}
//               </span>
//               {post.share && (
//                 <span>
//                   <i className="fa-solid fa-share text-green-500"></i> Share
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SocialMediaPostsSection;
