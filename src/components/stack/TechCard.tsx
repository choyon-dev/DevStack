import { FiCheck } from "react-icons/fi";
import type { TechCardProps } from "../../types/Types";

export default function TechCard({
  tech,
  onAddToStack,
  isAdded,
}: TechCardProps) {
  return (
    <div className="bg-white border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition">
      <div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#fbe8f2] text-[#D73387] font-medium">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mt-3">{tech.name}</h3>
        <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed line-clamp-2">
          {tech.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md font-medium">
            {tech.category}
          </span>
          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded-md font-medium">
            {tech.difficulty}
          </span>
          <span className="flex items-center gap-1 text-amber-500 font-semibold ml-auto">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => onAddToStack(tech)}
        className={`mt-5 w-full py-2.5 px-4 text-sm font-medium rounded-xl transition flex items-center justify-center gap-2 cursor-pointer ${
          isAdded
            ? "bg-[#D61E7F] text-white opacity-90"
            : "bg-[#0F172A] hover:bg-black text-white"
        }`}
      >
        {isAdded ? (
          <>
            <FiCheck className="text-base" />
            <span>Added to Stack</span>
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
}
