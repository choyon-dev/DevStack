import Logo from "../../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/60 pt-16 pb-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <img src={Logo} alt="Dev Stack Logo" />
            <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-3 md:gap-5 mt-5 md:mt-6 text-sm font-medium text-neutral-800">
              <a href="#" className="hover:text-[#D91B7E] transition">GitHub</a>
              <span className="md:hidden text-neutral-400 text-xs">•</span>
              <a href="#" className="hover:text-[#D91B7E] transition">Twitter</a>
              <span className="md:hidden text-neutral-400 text-xs">•</span>
              <a href="#" className="hover:text-[#D91B7E] transition">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-neutral-900 tracking-wider">PRODUCT</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-neutral-500">
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Home</li>
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Technologies</li>
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Projects</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-neutral-900 tracking-wider">COMPANY</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-neutral-500">
                <li className="hover:text-[#D91B7E] transition cursor-pointer">About</li>
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Contact</li>
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Careers</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-neutral-900 tracking-wider">LEGAL</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-neutral-500">
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#D91B7E] transition cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-100 mt-12 pt-6 flex justify-between items-center text-xs text-neutral-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-600 transition">Privacy</a>
            <a href="#" className="hover:text-neutral-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
