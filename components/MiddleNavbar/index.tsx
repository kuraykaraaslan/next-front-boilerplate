import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faBolt, faCaretDown, faChessRook, faHorse, faHorseHead, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelector from "../TopNavbar/LanguageSelector";
import { faFacebook, faTiktok, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const MiddleNavbar = () => {

    return (
        <div className="border-b bg-white shadow-sm">
            <div className="mx-auto flex items-stretch max-w-7xl items-center h-16 justify-between lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 p-2 gap-6 pl-4 md:pl-0">
                    <div className="relative group inline-flex items-center justify-center text-base font-medium gap-2">
                        <FontAwesomeIcon icon={faBolt} className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <div className="relative group inline-flex items-center justify-center text-base font-medium gap-2">
                        <FontAwesomeIcon icon={faHorseHead} className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <div className="relative group inline-flex items-center justify-center text-base font-medium gap-2">
                        <FontAwesomeIcon icon={faChessRook} className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 divide-x">

                </div>
                <div className="flex lg:flex-1 lg:justify-end items-center md:divide-x gap-2">
                    <div className="flex relative group inline-flex items-center justify-center text-base font-medium gap-2">
                        <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faFacebook} className="h-4 w-4" aria-hidden="true" /></a>
                        <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faTwitter} className="h-4 w-4" aria-hidden="true" /></a>
                        <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden="true" /></a>
                        <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faYoutube} className="h-4 w-4" aria-hidden="true" /></a>
                        <a href="#" className="text-sm font-semibold hover:text-primary"><FontAwesomeIcon icon={faTiktok} className="h-4 w-4" aria-hidden="true" /></a>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default MiddleNavbar;