'use client';
import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
        <div className="border-b border-gray-200 shadow-sm">
            <nav className="mx-auto flex items-stretch max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 py-6 pl-4 lg:pl-0">
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
                    <a href="#" className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary">
                        <div className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Product</div>
                    </a>
                    <div className="relative group inline-flex items-center justify-center text-base font-medium px-6 hover:text-white hover:bg-primary" onMouseEnter={toggleFeaturesMenu} onMouseLeave={toggleFeaturesMenu}>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 group-hover:text-white">Features</a>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="h-5 w-5 ml-2"
                            aria-hidden="true"
                        />
                        {isFeaturesMenuOpen && (
                            <div style={{ display: "block" }}  className="absolute z-10 mt-48 align-items-center justify-center w-52">
                                <div className="bg-white shadow-lg py-1 grid grid-cols-1 gap-4 border-t-2 border-primary w-52 mt-4 transform translate-x-10">
                                    <div className="col-span-1">
                                        <a href="#" className="text-gray-900 hover:text-primary block px-4 py-2 text-sm">Feature 1</a>
                                        <a href="#" className="text-gray-900 hover:text-primary block px-4 py-2 text-sm">Feature 2</a>
                                        <a href="#" className="text-gray-900 hover:text-primary block px-4 py-2 text-sm">Feature 3</a>
                                    </div>
                                </div>
                            </div>
                        )}
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