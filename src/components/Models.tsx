import { useState } from "react";
import ModelCard from "./ModelCard";
import modelsData from "../data/db.json";
import { allTags } from "../data/tags";
import type { ModelData } from "../types";

const models: ModelData[] = modelsData as ModelData[];

export default function Models() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredModels = models.filter((model) => {
    const q = query.toLowerCase();
    const matchesQuery =
      model.title.toLowerCase().includes(q) ||
      model.tags.some((tag) => tag.toLowerCase().includes(q));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => model.tags.includes(tag));

    return matchesQuery && matchesTags;
  });

  return (
    <section
      id="models"
      className="py-20 px-6 min-h-[120vh] flex flex-col items-center bg-gray-50 w-full"
    >
      <div className="text-center w-full max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          3D Models
        </h2>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search models by name or tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                selectedTags.includes(tag)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => <ModelCard key={model.id} {...model} />)
          ) : (
            <p className="text-gray-500 text-lg col-span-full">No models found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
