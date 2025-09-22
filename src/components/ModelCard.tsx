import { Link } from "react-router-dom";

type ModelCardProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category?: string;
  price?: string;
};

export default function ModelCard({ id, title, description, thumbnail, category, price }: ModelCardProps) {
  return (
    <Link
      to={`/models/${id}`}
      className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden max-w-sm mx-auto"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white font-semibold bg-blue-600 px-4 py-2 rounded">View</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4 text-sm line-clamp-3">{description}</p>
        <div className="flex justify-between items-center text-gray-700">
          {category && <span className="text-sm">{category}</span>}
          {price && <span className="text-sm font-semibold">{price}</span>}
        </div>
      </div>
    </Link>
  );
}
