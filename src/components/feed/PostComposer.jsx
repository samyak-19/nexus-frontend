"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";




export default function PostComposer({getToken}) {

  const router = useRouter();
  




  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [communitySlug, setCommunitySlug] = useState("");

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);




  const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);




    if (file) {

      setPreview(URL.createObjectURL(file));
    }
  };




  const handleSubmit = async (e) => {
    const token = await getToken();

    e.preventDefault();

    setLoading(true);




    try {

      const formData = new FormData();

      formData.append("title", title);

      formData.append("content", content);

      formData.append("communitySlug", communitySlug);




      if (image) {

        formData.append("image", image);
      }




      const response = await fetch(
  "http://localhost:5000/api/post/create",
  {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
    },

    body: formData,
  }
);




      const data = await response.json();




      alert(data.message);




      router.push("/");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);
    }
  };




  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-3xl p-10 shadow-sm"
    >

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[0.3em] text-gray-400 text-sm font-bold">
          Compose
        </p>

        <h1 className="text-5xl font-black mt-3 text-gray-700">
          Create Post
        </h1>

      </div>




      {/* COMMUNITY */}

      <div className="mt-10">

        <label className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">

          Community

        </label>




        <input
          type="text"
          placeholder="javascript"
          value={communitySlug}
          onChange={(e) => setCommunitySlug(e.target.value)}
          className="w-full mt-3 border rounded-2xl p-5 text-lg outline-none focus:ring-2 focus:ring-black text-black"
        />

      </div>




      {/* TITLE */}

      <div className="mt-8">

        <label className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">

          Title

        </label>




        <input
          type="text"
          placeholder="Write a strong title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-3 border rounded-2xl p-5 text-2xl font-semibold outline-none focus:ring-2 focus:ring-black text-gray-800"
        />

      </div>




      {/* CONTENT */}

      <div className="mt-8">

        <label className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">

          Content

        </label>




        <textarea
          placeholder="Share your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mt-3 border rounded-2xl p-5 h-[250px] text-lg outline-none resize-none focus:ring-2 focus:ring-black text-gray-700"
        />

      </div>




      {/* IMAGE UPLOAD */}

      <div className="mt-8">

        <label className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500">

          Photo

        </label>




        <label className="border-2 border-dashed rounded-3xl h-[250px] mt-3 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">

          <p className="text-5xl">
            🖼️
          </p>

          <p className="mt-4 text-gray-500">
            Click to upload image
          </p>




          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

        </label>

      </div>




      {/* IMAGE PREVIEW */}

      {preview && (

        <div className="mt-8">

          <img
            src={preview}
            alt="Preview"
            className="rounded-3xl w-full max-h-[500px] object-cover"
          />

        </div>

      )}






      {/* BUTTON */}

      <div className="mt-10 flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition disabled:opacity-50"
        >

          {loading ? "Publishing..." : "Publish"}

        </button>

      </div>

    </form>
  );
}