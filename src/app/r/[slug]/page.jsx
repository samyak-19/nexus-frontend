"use client";

import { useEffect, useState } from "react";

export default function CommunityPage({ params }) {

  const [community, setCommunity] = useState(null);

  useEffect(() => {

    fetchCommunity();

  }, []);

  const fetchCommunity = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/community/${params.slug}`
      );

      const data = await response.json();

      setCommunity(data.community);

    } catch (error) {

      console.log(error);
    }
  };

  if (!community) {
    return <h1 className="p-10">Loading...</h1>;
  }

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        r/{community.name}
      </h1>

      <p className="text-gray-500 mt-2">
        Community Page
      </p>

    </div>
  );
}