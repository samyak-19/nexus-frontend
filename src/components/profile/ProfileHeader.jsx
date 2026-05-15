export default function ProfileHeader({

  user,
}) {

  return (
    <div className="bg-white border rounded-3xl p-10">

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">

        <div className="flex flex-col sm:flex-row gap-8">

          {/* AVATAR */}

          <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-5xl font-black shrink-0">

            {(user?.username || "U").charAt(0).toUpperCase()}

          </div>

          {/* INFO */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 font-bold">
              Profile
            </p>
            <h1 className="text-6xl sm:text-6xl font-black mt-4">
              {user?.username}
            </h1>

            <p className="text-gray-500 mt-5 text-xl">
              {user?.email}
            </p>

            <p className="text-gray-600 mt-6 max-w-2xl leading-8 text-lg">

              Passionate about building modern web applications,
              scalable systems, and engaging user experiences.

            </p>

          </div>

        </div>

        {/* ACTION */}

        <button className="border px-8 py-4 rounded-2xl hover:bg-gray-100 transition">

          Edit Profile

        </button>

      </div>

      {/* STATS */}

      <div className="flex gap-16 mt-12">

        <div>

          <p className="text-gray-400 text-sm">
            Posts
          </p>

          <p className="text-4xl font-black mt-2">

            {user?.posts?.length ||0}

          </p>

        </div>

        <div>

          <p className="text-gray-400 text-sm">
            Comments
          </p>

          <p className="text-4xl font-black mt-2">

            {user?.comments?.length || 0}

          </p>

        </div>

        <div>

          <p className="text-gray-400 text-sm">
            Reputation
          </p>

          <p className="text-4xl font-black mt-2">
            1.2k
          </p>

        </div>

      </div>

    </div>
  );
}