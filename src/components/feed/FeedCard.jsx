"use client";

import Link from "next/link";

import VotePanel from "./VotePanel";




export default function FeedCard({

  post,

  handleVote,
}) {


  const totalVotes = post.votes.reduce(
    (acc, vote) => acc + vote.type,
    0
  );

  const likes = post.votes.filter(

  (vote) => vote.type === 1

).length;

const dislikes = post.votes.filter(

  (vote) => vote.type === -1

).length;




  return (
    <div className="border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">

      <div className="flex  items-start  flex-col sm:flex-row">

        {/* VOTE PANEL */}

        <VotePanel
        likes={likes}
        dislikes={dislikes}
        onUpvote={() => handleVote(post.id, 1)}
        onDownvote={() => handleVote(post.id, -1)}
        />




        {/* CONTENT */}

        <div className="flex-1 p-6">

          {/* TOP META */}

          <div className="flex items-center gap-3 text-sm text-gray-500">

            <Link
              href={`/r/${post.community.slug}`}
              className="font-semibold hover:underline"
            >
              r/{post.community.name}
            </Link>

            <span>•</span>

            <p>Posted by Nezus User</p>

          </div>




          {/* TITLE */}

          <Link href={`/post/${post.id}`}>

            <h2 className="text-3xl sm:text-3xl font-black mt-4 leading-tight hover:underline text-gray-500">

              {post.title}

            </h2>

          </Link>




          {/* CONTENT */}

          <p className="text-gray-600 mt-5 leading-8 sm:leading-8 text-base sm:text-lg">

            {post.content}

          </p>




          {/* IMAGE */}

          {post.imageUrl && (

            <img
              src={post.imageUrl}
              alt="Post Image"
              className="mt-6 rounded-2xl w-full max-h-125 object-cover"
            />

          )}






          {/* ACTIONS */}

          <div className="flex items-center gap-8 mt-6 text-gray-500">

            <button className="hover:text-black transition">
              💬 Comments
            </button>

            <button className="hover:text-black transition">
              🔗 Share
            </button>

            <button className="hover:text-black transition">
              🔖 Save
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}