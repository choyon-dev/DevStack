import { use } from "react";
import TechCard from "./TechCard";
import type { TechGridProps } from "../../types/Types";

export default function TechGrid({ techPromise, onAddToStack }: TechGridProps) {
  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} onAddToStack={onAddToStack} />
      ))}
    </div>
  );
}
