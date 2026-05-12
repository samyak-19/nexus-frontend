"use client";

import { useState } from "react";

export default function CreateCommunityPage() {

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/community/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setName("");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="border p-6 rounded-lg w-[400px] space-y-4"
      >

        <h1 className="text-2xl font-bold">
          Create Community
        </h1>

        <input
          type="text"
          placeholder="Enter community name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-3 rounded-lg w-full"
        >
          Create Community
        </button>

      </form>

    </div>
  );
}