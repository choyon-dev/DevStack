import Logo from '../../assets/logo-text.png'
import { GiHamburgerMenu } from "react-icons/gi";
import type { NavHeaderActionProps } from "../../types/Types";

export function MobileHeader({ onOpenDrawer, selectedCount }: NavHeaderActionProps) {
    return (
        <div className="w-full border-b-[0.5px] border-black/5 py-3 px-4">
            <div className="flex items-center justify-between">
                <button
                    onClick={onOpenDrawer}
                    className="relative p-1 text-neutral-700 hover:text-black cursor-pointer"
                >
                    <GiHamburgerMenu size={22} />
                    {selectedCount > 0 && (
                        <span className="absolute -top-1 -right-1.5 bg-[#D91B7E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            {selectedCount}
                        </span>
                    )}
                </button>
                <div><img src={Logo} alt="logo" className="h-6 object-contain" /></div>
                <div className="flex gap-2 items-center">
                    <h4 className="text-[12px] cursor-pointer">Sign In</h4>
                    <button className="py-1 px-3.5 bg-[#D91B7E] hover:bg-black rounded-4xl text-white text-[12px] cursor-pointer transition">Sign Up</button>
                </div>
            </div>
        </div>
    );
}