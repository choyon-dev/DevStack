
import Logo from '../../assets/logo-text.png'
import { GiHamburgerMenu } from "react-icons/gi";
export function MobileHeader(){
    return (

        <div className="flex items-center justify-center gap-7 py-2.5 border-b-[0.5px] border-black/5">
        <div><GiHamburgerMenu size={25}/> </div>
        <div><img src={Logo} alt="tablogo" /></div>
        <div className='flex gap-2.5 items-center'>
            <h4 className="text-[10px]">Sign In</h4>
            <button className="py-1 px-5 bg-[#D91B7E] hover:bg-black rounded-4xl text-white text-[10px]">Sign Up</button>
        </div>

    </div>
    )
}