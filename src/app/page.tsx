"use client";

import { useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";

import FeedCard from "../components/feed/FeedCard";

import FeedSkeleton from "../components/feed/FeedSkeleton";

import EmptyState from "../components/ui/EmptyState";

import { useAuth } from "@clerk/nextjs";




export default function HomePage() {

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();




  const [posts, setPosts] = useState<any[]>([]);

  const [sortType, setSortType] = useState("latest");

  const [loading, setLoading] = useState(true);




  useEffect(() => {

    fetchPosts();

  }, [sortType]);




  const fetchPosts = async () => {

    try {

      setLoading(true);




      const response = await fetch(
        `http://localhost:5000/api/post?sort=${sortType}`
      );




      const data = await response.json();




      setPosts(data.posts);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };




 const handleVote = async (postId: string, 
  type:Number) => {

  try {

    const token = await getToken();




    await fetch(
      "http://localhost:5000/api/vote",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          postId,
          type,
        }),
      }
    );




    fetchPosts();

  } catch (error) {

    console.log(error);
  }
};




  return (
    <div>

      {/* HERO */}

      <div className="mb-12">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">

          Discover

        </p>




        <h1 className="text-5xl sm:text-6xl font-black mt-4 tracking-tight text-gray-700">

          Global Feed

        </h1>




        <p className="text-gray-500 mt-5 text-lg max-w-2xl leading-8">

          Explore trending communities, discover ideas,
          and join conversations with creators and developers.

        </p>

      </div>






      {/* SORTING */}

      <div className="flex items-center gap-4 mb-10 flex-wrap">

        <button
          onClick={() => setSortType("latest")}
          className={` text-gray-500 px-6 py-3 rounded-2xl font-semibold transition ${
            sortType === "latest"
              ? "bg-black text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          Latest
        </button>




        <button
          onClick={() => setSortType("trending")}
          className={` text-gray-500 px-6 py-3 rounded-2xl font-semibold transition ${
            sortType === "trending"
              ? "bg-black text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          Trending
        </button>

      </div>






      {/* FEED */}

      <div className="space-y-8">

        {loading ? (

          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>

        ) : posts.length === 0 ? (

          <EmptyState
            title="No posts yet"
            description="Be the first person to start a discussion and share something with the community."
          />

        ) : (

          posts.map((post: any) => (

            <FeedCard
              key={post.id}
              post={post}
              handleVote={handleVote}
            />

          ))

        )}

      </div>

    </div>
  );
}