"use client";

import { use,useEffect, useState } from "react";
import { useUser, useAuth, } from "@clerk/nextjs";
import FeedCard from "../../../components/feed/FeedCard";
import CommentCard from "../../../components/feed/CommentCard";

export default function SinglePostPage(props) {

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  const [post, setPost] = useState(null);

  const [comments, setComments] = useState([]);

  const [content, setContent] = useState("");

  const resolvedParams = use(props.params);

  const id = resolvedParams.id;


  useEffect(() => {

    if (id) {

      fetchPost();

      fetchComments();
    }

  }, [id]);




  const fetchPost = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/post/${id}`
      );

      const data = await response.json();

      setPost(data.post);

    } catch (error) {

      console.log(error);
    }
  };




  const fetchComments = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/comment/${id}`
      );

      const data = await response.json();

      setComments(data.comments);

    } catch (error) {

      console.log(error);
    }
  };




  const handleComment = async (e) => {

    e.preventDefault();

    try {

       const token = await getToken();

    console.log(token);

      const response = await fetch(
        "http://localhost:5000/api/comment/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            content,
            postId: id,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setContent("");

      fetchComments();

    } catch (error) {

      console.log(error);
    }
  };




  if (!post) {

    return (
      <h1 className="p-10">
        Loading...
      </h1>
    );
  }




  return (
  <div>

    {/* MAIN POST */}

    <FeedCard
      post={{
        ...post,
        community: {
          name: "javascript",
          slug: "javascript",
        },
        votes: post.votes || [],
      }}
      handleVote={() => {}}
    />






    {/* COMMENT SECTION */}

    <div className="mt-12">

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">

            Discussion

          </p>

          <h2 className="text-5xl font-black mt-3">

            Comments

          </h2>

        </div>

      </div>






      {/* COMMENT FORM */}

      {isSignedIn ? (

        <form
          onSubmit={handleComment}
          className="bg-white border rounded-3xl p-8 mt-10"
        >

          <textarea
            placeholder="Join the discussion..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-2xl p-5 h-[180px] resize-none outline-none focus:ring-2 focus:ring-black text-lg"
          />






          <div className="flex justify-end mt-6">

            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-2xl hover:scale-105 transition"
            >

              Add Comment

            </button>

          </div>

        </form>

      ) : (

        <div className="bg-white border rounded-3xl p-12 mt-10 text-center">

          <h2 className="text-4xl font-black">

            Login to join discussion

          </h2>

          <p className="text-gray-500 mt-4 text-lg">

            Participate in conversations and share your thoughts.

          </p>

        </div>

      )}






      {/* COMMENTS */}

      <div className="space-y-6 mt-10">

        {comments.map((comment) => (

          <CommentCard
            key={comment.id}
            comment={comment}
          />

        ))}

      </div>

    </div>

  </div>
);
}