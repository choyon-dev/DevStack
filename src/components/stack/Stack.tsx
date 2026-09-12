import { Suspense, useState } from "react";
import { toast } from "react-toastify";
import TechGrid from "./TechGrid";
import type { StackProps, Technology } from "../../types/Types";

export default function Stack({ techPromise }: StackProps) {
  const [selectedStacks, setSelectedStacks] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStacks.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStacks([...selectedStacks, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (tech: Technology) => {
    setSelectedStacks(selectedStacks.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (selectedStacks.length === 0) return;
    setSelectedStacks([]);
    toast.error("Removed all technologies from your stack!");
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#D91B7E] to-[#6A1B9A] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:flex-1">
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-10 h-10 border-4 border-[#D91B7E] border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-neutral-600 text-sm">Loading technologies...</p>
                </div>
              }
            >
              <TechGrid
                techPromise={techPromise}
                onAddToStack={handleAddToStack}
                selectedStacks={selectedStacks}
              />
            </Suspense>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs sticky top-6">
            <h3 className="text-lg font-bold text-neutral-900">Your Stack</h3>
            <p className="text-xs text-neutral-500 mt-1">
              {selectedStacks.length} Technology Selected
            </p>

            {selectedStacks.length === 0 ? (
              <div className="mt-6 text-center py-10 text-neutral-400 text-sm border-2 border-dashed border-neutral-200 rounded-xl">
                No technologies selected yet.
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3 mt-5 max-h-95 overflow-y-auto pr-1">
                  {selectedStacks.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-white border border-neutral-200/80 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-7 h-7 object-contain"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-950">
                            {item.name}
                          </h4>
                          <p className="text-xs text-neutral-400">{item.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromStack(item)}
                        className="text-neutral-400 hover:text-red-500 text-sm font-bold p-1 cursor-pointer transition"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="mt-5 w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-sm font-medium transition cursor-pointer"
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}