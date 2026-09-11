import HeroImg from "../../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-[#D91B7E] to-[#6A1B9A] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-linear-to-r from-[#D91B7E] to-[#990F52] hover:opacity-90 transition-opacity text-white py-3 px-7 rounded-xl font-medium cursor-pointer">
              Explore Technologies
            </button>
            <button className="w-full sm:w-auto border border-neutral-700 hover:border-black transition-colors py-3 px-7 rounded-xl font-medium cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg flex justify-center">
          <img
            src={HeroImg}
            alt="Hero banner graphic"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}