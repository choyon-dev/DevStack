import { use } from "react";
import TechCard from "./TechCard";
import type { TechGridProps } from "../../types/Types";

export default function TechGrid({
  techPromise,
  onAddToStack,
  selectedStacks,
}: TechGridProps) {
  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => {
        const isAdded = selectedStacks.some((item) => item.id === tech.id);
        return (
          <TechCard
            key={tech.id}
            tech={tech}
            onAddToStack={onAddToStack}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}
