"use client";

import Link from "next/link";




export default function MobileSidebar({

  open,

  setOpen,
}) {

  if (!open) return null;




  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      {/* SIDEBAR */}

      <div className="w-[280px] h-full bg-white p-6">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <h1 className="text-4xl font-black tracking-tight bg-linear-to-r from-teal-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            NEZUS
          </h1>




          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>

        </div>






        {/* LINKS */}

        <div className="flex flex-col gap-3 mt-12">

          <Link
            href="/"
            className="border rounded-2xl px-5 py-4 text-gray-500"
            onClick={() => setOpen(false)}
          >
            Feed
          </Link>




          <Link
            href="/communities"
            className="border rounded-2xl px-5 py-4"
            onClick={() => setOpen(false)}
          >
            Communities
          </Link>




          <Link
            href="/profile"
            className="border rounded-2xl px-5 py-4"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>




          <Link
            href="/create-post"
            className="border rounded-2xl px-5 py-4"
            onClick={() => setOpen(false)}
          >
            Create Post
          </Link>

        </div>

      </div>

    </div>
  );
}