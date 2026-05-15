export default function CommentCard({

  comment,
}) {

  return (
    <div className="bg-white border rounded-3xl p-6">

      <div className="flex gap-5">

        {/* AVATAR */}

        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-black shrink-0">

          N

        </div>






        {/* CONTENT */}

        <div className="flex-1">

          <div className="flex items-center gap-3">

            <h3 className="font-black text-lg">
              Nezus User
            </h3>

            <p className="text-gray-400 text-sm">
              2h ago
            </p>

          </div>






          <p className="text-gray-700 leading-8 text-lg mt-4">

            {comment.content}

          </p>






          {/* ACTIONS */}

          <div className="flex gap-6 mt-6 text-gray-500">

            <button className="hover:text-black transition">
              Like
            </button>

            <button className="hover:text-black transition">
              Reply
            </button>

            <button className="hover:text-black transition">
              Share
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}