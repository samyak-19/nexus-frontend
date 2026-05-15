export default function ActivityCard({

  title,

  content,

  type,
}) {

  return (
    <div className="bg-white border rounded-3xl p-7 hover:shadow-lg transition">

      {/* TYPE */}

      <div className="flex items-center justify-between">

        <p className="uppercase tracking-[0.2em] text-xs text-gray-400 font-bold">

          {type}

        </p>

        <p className="text-sm text-gray-400">
          2h ago
        </p>

      </div>






      {/* CONTENT */}

      <h2 className="text-3xl font-black mt-5">

        {title}

      </h2>




      <p className="text-gray-600 leading-8 mt-5 text-lg">

        {content}

      </p>

    </div>
  );
}