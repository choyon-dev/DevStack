import HeroImg from "../../assets/banner-stack.png"

export default function Hero(){

    return(
        <div className="flex items-center justify-center">
           <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold">Build Your Ideal <br/><span className="bg-linear-to-r from-[#D91B7E] to-[#6A1B9A] bg-clip-text text-transparent ">Development Stack</span></h1>
          <p className="w-1/2">Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.</p>
            <div className="flex gap-7">
                <button className="bg-linear-to-r from-[#D91B7E] to-[#990F52] text-white py-3 px-7 rounded-4xl">Explore Technologies</button>
                 <button className="border border-neutral-700 py-3 px-7 rounded-4xl">Learn More</button>
            </div>
        
           </div>
           <div> 
               <img src={HeroImg} alt="heroimage" />
           </div>
        </div>
    );
}