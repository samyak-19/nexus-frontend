"use client";

import Link from "next/link";




export default function CommunityCard({

  community,
}) {

  return (
    <Link href={`/r/${community.slug}`}>

      <div className="bg-white border rounded-3xl p-8 hover:shadow-xl transition duration-300 cursor-pointer">

        {/* TOP */}

        <div className="flex items-start justify-between text-gray-500">

          <div>

            <p className="uppercase tracking-[0.2em] text-xs font-bold text-gray-400">

              Community

            </p>




            <h2 className="text-3xl font-black mt-4">

              {community.name}

            </h2>

          </div>




          {/* MEMBERS */}

          <div className="text-right">

            <p className="text-gray-400 text-sm">
              Members
            </p>

            <p className="font-black text-xl">
              12.4k
            </p>

          </div>

        </div>






        {/* DESCRIPTION */}

        <p className="text-gray-600 mt-6 leading-8 text-lg">

          {community.description ||
            "A growing professional community discussing modern technology and ideas."}

        </p>






        {/* BUTTON */}

        <div className="mt-8">

          <button className="bg-black text-white px-8 py-3 rounded-2xl hover:scale-105 transition">

            Join Community

          </button>

        </div>

      </div>

    </Link>
  );
}