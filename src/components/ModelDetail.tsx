import { useParams, useNavigate } from "react-router-dom";
import modelsData from "../data/db.json";
import type { ModelData } from "../types";
import ModelViewer from "./ModelViewer";

const models: ModelData[] = modelsData;

export default function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const model = models.find((m) => m.id === id);

  if (!model) return <p className="p-20 text-xl">Model not found.</p>;

  return (
    <div className="p-8 md:p-20 min-h-screen flex flex-col items-center bg-[#F5F5F5] w-full">
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 text-gray-800 transition"
      >
        ← Back to Models
      </button>

      <h2 className="text-4xl font-bold mb-4">{model.title}</h2>
      <p className="text-gray-600 mb-8">{model.description}</p>
      <div className="w-full max-w-7xl h-[600px] md:h-[800px]">
        <ModelViewer url={model.file} />
      </div>
    </div>
  );
}
