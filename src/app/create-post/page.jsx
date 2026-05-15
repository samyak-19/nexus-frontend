"use client";

import { useUser ,useAuth, } from "@clerk/nextjs";
import PostComposer from "../../components/feed/PostComposer";




export default function CreatePostPage() {
  
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();




  if (!isSignedIn) {

    return (
      <div className="bg-white border rounded-3xl p-16 text-center">

        <h1 className="text-4xl font-black text-gray-700">
          Please login to create posts
        </h1>

      </div>
    );
  }




  return <PostComposer getToken={getToken} />;
}