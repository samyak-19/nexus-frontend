"use client";

import { useState } from "react";

import { useUser } from "@clerk/nextjs";

export default function CreateCommunityPage() {

  const { isSignedIn } = useUser();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  




  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://nexus-backend-lit8.onrender.com/api/community/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            description,
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




  if (!isSignedIn) {

    return (
      <div className="p-10 text-center">

        <h1 className="text-3xl font-bold">
          Please login to create communities
        </h1>

      </div>
    );
  }




  return (
  <div className="bg-white border rounded-3xl p-10">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">

      Initialize

    </p>

    <h1 className="text-5xl font-black mt-3 text-gray-700">

      Create Community

    </h1>






    <form
      onSubmit={handleSubmit}
      className="mt-10"
    >

      {/* NAME */}

      <div>

        <label className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold">

          Community Name

        </label>




        <input
          type="text"
          placeholder="AI Research"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-3 border rounded-2xl p-5 text-xl outline-none focus:ring-2 focus:ring-black text-gray-800"
        />

      </div>






      {/* DESCRIPTION */}

      <div className="mt-8">

        <label className="uppercase tracking-[0.2em] text-sm text-gray-500 font-bold">

          Description

        </label>




        <textarea
          placeholder="What is this community about?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-3 border rounded-2xl p-5 h-[200px] resize-none outline-none focus:ring-2 focus:ring-black text-gray-800"
        />

      </div>






      {/* BUTTON */}

      <div className="mt-10 flex justify-end">

        <button
          type="submit"
          className="bg-black text-white px-10 py-4 rounded-2xl hover:scale-105 transition"
        >

          Create Community

        </button>

      </div>

    </form>

  </div>
);
}