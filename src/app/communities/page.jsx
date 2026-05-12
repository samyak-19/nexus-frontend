"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CommunitiesPage() {

  const [communities, setCommunities] = useState([]);

  useEffect(() => {

    fetchCommunities();

  }, []);

  const fetchCommunities = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/community"
      );

      const data = await response.json();

      setCommunities(data.communities);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Communities
      </h1>

      <div className="space-y-4">

        {communities.map((community) => (

          <Link
            key={community.id}
            href={`/r/${community.slug}`}
            className="block border p-4 rounded-lg hover:bg-gray-100"
          >

            <h2 className="text-xl font-semibold">
              r/{community.name}
            </h2>

          </Link>

        ))}

      </div>

    </div>
  );
}