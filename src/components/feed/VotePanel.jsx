"use client";




export default function VotePanel({

  likes,

  dislikes,

  onUpvote,

  onDownvote,

}) {

  return (

    <div className="flex sm:flex-col items-center justify-center gap-6 bg-gray-50 p-6 border-b sm:border-b-0 sm:border-r min-w-[110px]">




      {/* LIKE */}

      <button
        onClick={onUpvote}
        className="flex flex-col items-center hover:text-green-600 transition"
      >

        <span className="text-3xl">
          👍
        </span>

        <span className="font-bold text-lg mt-1 text-blue-400">
          {likes}
        </span>

      </button>






      {/* DISLIKE */}

      <button
        onClick={onDownvote}
        className="flex flex-col items-center hover:text-red-600 transition"
      >

        <span className="text-3xl">
          👎
        </span>

        <span className="font-bold text-lg mt-1 text-red-400">
          {dislikes}
        </span>

      </button>

    </div>
  );
}