export default function FeedSkeleton() {

  return (
    <div className="bg-white border rounded-2xl overflow-hidden animate-pulse">

      <div className="flex flex-col sm:flex-row">

        {/* VOTE PANEL */}

        <div className="sm:w-[70px] border-b sm:border-b-0 sm:border-r flex sm:flex-col items-center justify-center gap-4 py-4">

          <div className="w-6 h-6 rounded bg-gray-200" />

          <div className="w-8 h-8 rounded bg-gray-200" />

          <div className="w-6 h-6 rounded bg-gray-200" />

        </div>






        {/* CONTENT */}

        <div className="flex-1 p-6">

          {/* META */}

          <div className="w-40 h-4 bg-gray-200 rounded" />






          {/* TITLE */}

          <div className="w-3/4 h-10 bg-gray-200 rounded mt-5" />






          {/* TEXT */}

          <div className="space-y-3 mt-6">

            <div className="w-full h-4 bg-gray-200 rounded" />

            <div className="w-full h-4 bg-gray-200 rounded" />

            <div className="w-2/3 h-4 bg-gray-200 rounded" />

          </div>






          {/* IMAGE */}

          <div className="w-full h-[300px] bg-gray-200 rounded-2xl mt-8" />






          {/* ACTIONS */}

          <div className="flex gap-6 mt-8">

            <div className="w-20 h-4 bg-gray-200 rounded" />

            <div className="w-20 h-4 bg-gray-200 rounded" />

            <div className="w-20 h-4 bg-gray-200 rounded" />

          </div>

        </div>

      </div>

    </div>
  );
}