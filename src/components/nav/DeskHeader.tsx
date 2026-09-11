import Logo from '../../assets/logo-text.png'
export function DeskHeader() {

    return (
        <div className="flex items-center justify-center py-3.5 border-b-[0.5px] border-black/5">
            <div className="flex justify-between container">
                <div><img src={Logo} alt="header logo" /></div>

                <div className=" flex items-center justify-center">
                    <ul className='flex gap-7'>
                        <li className="text-[#D91B7E] text-[16px] cursor-pointer">Home</li>
                        <li className="text-[16px] hover:text-[#D91B7E] cursor-pointer">Technologies</li>
                        <li className="text-[16px] hover:text-[#D91B7E] cursor-pointer">Projects</li>
                        <li className="text-[16px] hover:text-[#D91B7E] cursor-pointer">About</li>
                        <li className="text-[16px] hover:text-[#D91B7E] cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5 items-center'>
                    <h4 className="text-[16px] hover:text-[#D91B7E] cursor-pointer">Sign In</h4>
                    <button className="py-1 px-5 bg-[#D91B7E] hover:bg-black rounded-4xl text-white text-[16px] cursor-pointer">Sign Up</button>
                </div>
            </div>
        </div>
    )
}