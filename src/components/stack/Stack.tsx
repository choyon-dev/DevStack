import { Suspense } from "react";
import TechGrid from "./TechGrid";
import type { StackProps } from "../../types/Types";

export default function Stack({ techPromise }: StackProps) {
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
              <TechGrid techPromise={techPromise} />
            </Suspense>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs">
            <h3 className="text-lg font-bold text-neutral-900">Your Stack</h3>
            <p className="text-xs text-neutral-500 mt-1">0 Technology Selected</p>
            <div className="mt-6 text-center py-10 text-neutral-400 text-sm border-2 border-dashed border-neutral-200 rounded-xl">
              No technologies selected yet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}