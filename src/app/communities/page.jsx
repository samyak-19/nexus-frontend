"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CommunityCard from "../../components/community/CommunityCard";

export default function CommunitiesPage() {

  const [communities, setCommunities] = useState([]);

  useEffect(() => {

    fetchCommunities();

  }, []);

  const fetchCommunities = async () => {

    try {

      const response = await fetch(
        "https://nexus-backend-lit8.onrender.com/api/community"
      );

      const data = await response.json();

      setCommunities(data.communities);

    } catch (error) {

      console.log(error);
    }
  };

 return (
  <div>

    {/* HEADER */}

    <div className="flex items-center justify-between">

      <div>

        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">

          Discover

        </p>

        <h1 className="text-6xl font-black mt-3 text-gray-700">

          Communities

        </h1>

      </div>




      <Link
        href="/create-community"
        className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition"
      >
        New Community
      </Link>

    </div>






    {/* FILTERS */}

    <div className="flex gap-4 mt-10 flex-wrap">

      <button className="bg-black text-white px-6 py-3 rounded-2xl">

        All

      </button>

      <button className="border px-6 py-3 rounded-2xl hover:bg-gray-100">

        Engineering

      </button>

      <button className="border px-6 py-3 rounded-2xl hover:bg-gray-100">

        Design

      </button>

      <button className="border px-6 py-3 rounded-2xl hover:bg-gray-100">

        Product

      </button>

    </div>






    {/* COMMUNITY GRID */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">

      {communities.map((community) => (

        <CommunityCard
          key={community.id}
          community={community}
        />

      ))}

    </div>

  </div>
);
}