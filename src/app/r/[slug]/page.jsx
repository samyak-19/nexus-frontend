"use client";

import { useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";

import FeedCard from "../../../components/feed/FeedCard";

import FeedSkeleton from "../../../components/feed/FeedSkeleton";

import EmptyState from "../../../components/ui/EmptyState";

import PageLoader from "../../../components/ui/PageLoader";




export default function CommunityPage({ params }) {

  const { isSignedIn } = useUser();




  const [slug, setSlug] = useState("");

  const [community, setCommunity] = useState(null);

  const [posts, setPosts] = useState([]);

  const [sortType, setSortType] = useState("latest");

  const [loading, setLoading] = useState(true);




  // RESOLVE PARAMS
  useEffect(() => {

    const getSlug = async () => {

      const resolvedParams = await params;

      setSlug(resolvedParams.slug);
    };

    getSlug();

  }, [params]);




  // FETCH DATA
  useEffect(() => {

    if (slug) {

      fetchCommunity();

      fetchPosts();
    }

  }, [slug, sortType]);




  // FETCH COMMUNITY
  const fetchCommunity = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/community/${slug}`
      );

      const data = await response.json();

      setCommunity(data.community);

    } catch (error) {

      console.log(error);
    }
  };




  // FETCH POSTS
  const fetchPosts = async () => {

    try {

      setLoading(true);




      const response = await fetch(
        `http://localhost:5000/api/post/community/${slug}?sort=${sortType}`
      );

      const data = await response.json();

      setPosts(data.posts);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };




  // HANDLE VOTES
  const handleVote = async (postId, type) => {

    if (!isSignedIn) {

      alert("Please login to vote");

      return;
    }




    try {

      await fetch(
        "http://localhost:5000/api/vote",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
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




  // LOADING PAGE
  if (!community) {

    return <PageLoader />;
  }




  return (
    <div>

      {/* HERO */}

      <div className="bg-white border rounded-3xl p-6 sm:p-10">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">

          Community

        </p>




        <h1 className="text-4xl sm:text-6xl font-black mt-4">

          r/{community.name}

        </h1>




        <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-3xl leading-8 sm:leading-9">

          {community.description ||
            "A place to discuss ideas, share knowledge, and connect with professionals."}

        </p>






        {/* STATS */}

        <div className="flex gap-10 mt-10 flex-wrap">

          <div>

            <p className="text-gray-400 text-sm">
              Members
            </p>

            <p className="text-3xl font-black">
              12.4k
            </p>

          </div>




          <div>

            <p className="text-gray-400 text-sm">
              Online
            </p>

            <p className="text-3xl font-black">
              1.2k
            </p>

          </div>

        </div>






        {/* ACTIONS */}

        <div className="flex gap-4 mt-10 flex-wrap">

          <button className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition">

            Join Community

          </button>




          <button className="border px-8 py-4 rounded-2xl hover:bg-gray-100 transition">

            Share

          </button>

        </div>

      </div>






      {/* SORTING */}

      <div className="flex gap-4 mt-10 flex-wrap">

        <button
          onClick={() => setSortType("latest")}
          className={`px-6 py-3 rounded-2xl transition ${
            sortType === "latest"
              ? "bg-black text-white"
              : "border hover:bg-gray-100"
          }`}
        >
          Latest
        </button>




        <button
          onClick={() => setSortType("popular")}
          className={`px-6 py-3 rounded-2xl transition ${
            sortType === "popular"
              ? "bg-black text-white"
              : "border hover:bg-gray-100"
          }`}
        >
          Popular
        </button>

      </div>






      {/* POSTS */}

      <div className="space-y-8 mt-10">

        {loading ? (

          <>
            <FeedSkeleton />
            <FeedSkeleton />
            <FeedSkeleton />
          </>

        ) : posts.length === 0 ? (

          <EmptyState
            title="No discussions yet"
            description="Start the first discussion and help grow this community."
          />

        ) : (

          posts.map((post) => (

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