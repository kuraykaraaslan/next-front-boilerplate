'use client';
import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import dynamic from "next/dynamic";

const DefaultNavbar = () => {
    const [isFeaturesMenuOpen, setIsFeaturesMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleFeaturesMenu = () => {
        setIsFeaturesMenuOpen(!isFeaturesMenuOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
        <div className="">
            <nav className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
                <div className="py-6 pl-4 lg:pl-0">
                    <DefaultLogo />
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary p-6 mr-2" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMobileMenu}>
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon
                            icon={faBars}
                            className="h-6 w-6"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                    <a href="#" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-primary">
                        <div className="text-sm leading-6">Product</div>
                    </a>
                    <a href="/about" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-primary">
                        <div className="text-sm leading-6">Marketplace</div>
                    </a>
                    <a href="/about" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-primary">
                        <div className="text-sm leading-6">About</div>
                    </a>
                    <a href="/contact" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-primary">
                        <div className="text-sm leading-6">Contact</div>
                    </a>
                </div>
                <div className="hidden lg:flex lg:justify-end justify-center items-center">
                    <a href="#" className="btn text-sm font-semibold leading-6 bg-primary text-base text-white rounded-full">
                        <FontAwesomeIcon icon={faUser} className="h-3" aria-hidden="true" />
                    </a>
                </div>
            </nav>
        </div>
        {/* Mobile menu, show/hide based on mobile menu state. with dimming overlay */}
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`} id="mobile-menu" style={{ position: "fixed" , zIndex: 100}}>
            <div className="fixed inset-0 z-40 flex">
                <div className="fixed inset-0" onClick={toggleMobileMenu}>
                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center justify-center">
                            <DefaultLogo />
                        </div>
                        <nav className="mt-5 px-2 space-y-1">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">About</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Contact</a>
                        </nav>
                    </div>
                    <div className="flex justify-center pb-4">
                        <a href="#" className="btn text-sm font-semibold leading-6 bg-primary text-base text-white rounded-s">Log in</a>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
};

export default DefaultNavbar;