"use client";

import { useEffect, useState } from "react";
import {  useUser,} from "@clerk/nextjs";
import ProfileHeader from "../../components/profile/ProfileHeader";

import ActivityCard from "../../components/profile/ActivityCard";

export default function ProfilePage() {

  const { user: clerkUser } = useUser();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");




  useEffect(() => {

    if (clerkUser) {
      fetchProfile();
    }
  }, [clerkUser]);




  const fetchProfile = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/user/${clerkUser.id}`
      );

      const data = await response.json();

      setUser(data.user);

    } catch (error) {

      console.log(error);
    }
  };

  if (!user) {
    return <h1 className="p-10">Loading...</h1>;
  }

 return (
  <div>

    {/* PROFILE HEADER */}

    <ProfileHeader user={user} />






    {/* TABS */}

    <div className="flex gap-4 mt-10">

      <button
        onClick={() => setActiveTab("posts")}
        className={`px-8 py-4 rounded-2xl ${
          activeTab === "posts"
            ? "bg-black text-white"
            : "border hover:bg-gray-100"
        }`}
      >
        Posts
      </button>




      <button
        onClick={() => setActiveTab("comments")}
        className={`px-8 py-4 rounded-2xl ${
          activeTab === "comments"
            ? "bg-black text-white"
            : "border hover:bg-gray-100"
        }`}
      >
        Comments
      </button>

    </div>






    {/* POSTS */}

    {activeTab === "posts" && (

      <div className="space-y-8 mt-10">

        {user.posts.map((post) => (

          <ActivityCard
            key={post.id}
            type="Post"
            title={post.title}
            content={post.content}
          />

        ))}

      </div>

    )}






    {/* COMMENTS */}

    {activeTab === "comments" && (

      <div className="space-y-8 mt-10">

        {user.comments.map((comment) => (

          <ActivityCard
            key={comment.id}
            type="Comment"
            title="Community Discussion"
            content={comment.content}
          />

        ))}

      </div>

    )}

  </div>
);
}