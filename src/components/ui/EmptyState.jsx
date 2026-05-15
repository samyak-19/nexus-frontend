export default function EmptyState({

  title,

  description,
}) {

  return (
    <div className="bg-white border rounded-3xl p-16 text-center">

      <div className="text-6xl">
        📭
      </div>




      <h2 className="text-4xl font-black mt-6">

        {title}

      </h2>




      <p className="text-gray-500 text-lg mt-5 max-w-xl mx-auto leading-8">

        {description}

      </p>

    </div>
  );
}