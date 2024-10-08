import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelector from "./LanguageSelector";
import CitySelector from "./CitySelector";
import MyAccount from "./MyAccount";

const TopNavbar = () => {

    return (
        <div className="border-b bg-black shadow-sm">
            <div className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
            <div className="flex-none flex items-center gap-2">
               <LanguageSelector/>
               <CitySelector/>
            </div>
            <div className="flex-1 flex items-center justify-center">
             
            </div>
            <div className="flex-none bg-gray-500">
                <MyAccount/>
            </div>
            </div>
        </div>
    )

};

export default TopNavbar;