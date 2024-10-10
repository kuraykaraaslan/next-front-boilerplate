'use client';
import DefaultLogo from "../Logo/DefaultLogo"
import { faBars, faCalendar, faCaretDown, faMagnifyingGlass, faMapLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import dynamic from "next/dynamic";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const EventSearch = () => {
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
            <div className="flex justify-center items-center lg:px-8 h-32 hidden lg:block">
                <div className="shadow-sm drop-shadow-lg flex items-center justify-center h-20 rounded-lg divide-x divide-gray-200 drop-shadow-xl">
                    <div className="relative bg-white text-white p-2 h-20 rounded-l-lg sm:w-48 lg:w-96 flex gap-8"
                    style={{borderRight: "1px solid #e5e7eb"}}>
                        <input type="text" placeholder="Search for events" className="w-auto sm:w-32 lg:w-72 h-16 text-black m-0 bg-white border-0 focus:ring-0 focus:outline-none" />
                    </div>
                    <div className="bg-white text-white p-4 h-20 flex items-center justify-center gap-8 sm:w-32 lg:w-48 select-none relative"
                    style={{borderRight: "1px solid #e5e7eb"}}>
                        <span className="absolute left-4 text-gray-500">all dates</span>
                        <FontAwesomeIcon icon={faCalendar} className="absolute right-4 h-6 text-primary" />
                    </div>
                    <div className="bg-white text-white p-4 h-20 flex items-center justify-center gap-8 sm:w-32 lg:w-48 select-none relative"
                    style={{borderRight: "1px solid #e5e7eb"}}>
                        <span className="absolute left-4 text-gray-500">new york</span>
                        <FontAwesomeIcon icon={faMapLocationDot} className="absolute right-4 h-6 text-primary" />
                    </div>
                    <div className="bg-primary text-white p-4 h-20 flex items-center justify-center gap-8 sm:w-32 lg:w-48 rounded-r-lg select-none relative"
                    >
                        <span className="absolute left-4 text-white">search</span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-4 h-6" />
                    </div>
                </div>
            </div>

        </>
    )
};

export default EventSearch;