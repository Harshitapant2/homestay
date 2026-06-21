export default function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      
      <h2 className="font-bold text-xl">
        {title}
      </h2>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <button className="mt-4 px-4 py-2 bg-black text-white rounded">
        View
      </button>

    </div>
  );
}