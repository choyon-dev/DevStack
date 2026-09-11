import { DeskHeader } from "./DeskHeader";
import { MobileHeader } from "./MobileHeader";
import { TabHeader } from "./TabHeader";

export function Header() {
    
    return (
        <>
        
            <div className="hidden lg:block">
                <DeskHeader></DeskHeader>
            </div>
            <div className="hidden md:block lg:hidden">
                <TabHeader></TabHeader>
            </div>
            <div className="md:hidden block">
                <MobileHeader></MobileHeader>
            </div>
       
        </>
    

)
}