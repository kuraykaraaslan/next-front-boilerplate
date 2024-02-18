import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { faFacebook, faTiktok, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const MiddleNavbar = () => {

    return (
        <nav className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 p-2 gap-6">
                <div className="relative group inline-flex items-left justify-left text-base font-medium">
                    <img src="https://placehold.co/400" alt="Pegasus" className="max-h-12 text-primary" />
                </div>
                <div className="relative group inline-flex items-left justify-left text-base font-medium">
                    <img src="https://placehold.co/400" alt="Pegasus" className="max-h-12 text-primary" />
                </div>
                <div className="relative group inline-flex items-left justify-left text-base font-medium">
                    <img src="https://placehold.co/400" alt="Pegasus" className="max-h-12 text-primary" />
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 divide-x">
                <div className="relative group inline-flex items-center justify-right text-base font">
                    <a href="#" className="text-sm leading-6 text-gray-900">Company</a>
                </div>
                <div className="relative group inline-flex items-center justify-right text-base font pl-6">
                    <a href="#" className="text-sm leading-6 text-gray-900">Contact</a>
                </div>

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center px-6 divide-x gap-2">
                <div className="relative group inline-flex items-center justify-center text-base font-medium gap-2">
                    <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faFacebook} className="h-4 w-4" aria-hidden="true" /></a>
                    <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faTwitter} className="h-4 w-4" aria-hidden="true" /></a>
                    <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden="true" /></a>
                    <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faYoutube} className="h-4 w-4" aria-hidden="true" /></a>
                    <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faTiktok} className="h-4 w-4" aria-hidden="true" /></a>
                </div>
                <LanguageSelector />
            </div>
        </nav >
    )

};

export default MiddleNavbar;