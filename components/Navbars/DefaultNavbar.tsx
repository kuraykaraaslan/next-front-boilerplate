import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DefaultNavbar = () => {

    return (
        <div className="border-b border-gray-200 shadow-sm">
        <nav className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 py-6 pl-4 lg:pl-0">
                <DefaultLogo />
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary p-6 mr-2" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                <a href="#" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Product</div>
                </a>
                <div className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Features</a>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className="h-5 w-5 ml-2"
                        aria-hidden="true"
                    />
                </div>
                <a href="/about" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                    <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Marketplace</div>
                </a>
                <a href="/about" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                    <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">About</div>
                </a>
                
                <a href="/contact" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                    <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Contact</div>
                </a>

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center px-6">
                <a href="#" className="btn text-sm font-semibold leading-6 bg-primary text-base text-white rounded-s">Log in</a>
            </div>
        </nav >
        </div>
    )

};

export default DefaultNavbar;