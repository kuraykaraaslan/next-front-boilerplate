import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNavbar = () => {

    return (
        <nav className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
            <div className="hidden lg:flex lg:flex-1 lg:justify-center grid grid-cols-3 divide-x">
                <div className="relative group inline-flex items-center justify-center text-base px-3 p-3">
                    <a href="#" className="text-sm leading-6 text-gray-900">Marketplace</a>
                </div>
                <div className="relative group inline-flex items-center justify-center text-base px-3 p-3">
                    <a href="#" className="text-sm leading-6 text-gray-900">Community</a>
                </div>
                <div className="relative group inline-flex items-center justify-center text-base px-3 p-3">
                    <a href="#" className="text-sm leading-6 text-gray-900">Support</a>
                </div>

            </div>
        </nav >
    )

};

export default TopNavbar;