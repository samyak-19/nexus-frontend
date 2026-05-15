export default function RightSidebar() {

  return (
    <aside className="w-[320px] h-screen border-l bg-[#fafafa] fixed right-0 top-0 p-6 overflow-y-auto">

      {/* ACTIVE COMMUNITIES */}

      <div>

        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
          Active Communities
        </h2>




        <div className="mt-6 space-y-6">

          <div>

            <h3 className="font-bold text-lg">
              Rust Core Systems
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Memory management and concurrency.
            </p>

          </div>




          <div>

            <h3 className="font-bold text-lg">
              AI Research
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              LLMs, agents, and future systems.
            </p>

          </div>




          <div>

            <h3 className="font-bold text-lg">
              Product Strategy
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Growth, PM, and startup execution.
            </p>

          </div>

        </div>

      </div>




      {/* TRENDING */}

      <div className="mt-14">

        <h2 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
          Trending Topics
        </h2>




        <div className="mt-6 flex flex-col gap-4">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-green-500" />

            <p>AI Agents</p>

          </div>




          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-blue-500" />

            <p>System Design</p>

          </div>




          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-purple-500" />

            <p>Remote Work</p>

          </div>

        </div>

      </div>

    </aside>
  );
}