// a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article

// Path: components/Feed/DefaultFeed.tsx

import { icon } from '@fortawesome/fontawesome-svg-core';
import { faBars, faDiamond, faFootball, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EventMenu = () => {

    const buttons = [
        {
            icon: <FontAwesomeIcon icon={faDiamond} className="text-2xl mt-2 h-8 w-8" />,
            text: "VIP Experience",
            link: "/vip"
        },
        {
            icon: <FontAwesomeIcon icon={faFootball} className="text-2xl mt-2 h-8 w-8" />,
            text: "Sports",
            link: "/sports"
        },
        {
            icon: <FontAwesomeIcon icon={faMusic} className="text-2xl mt-2 h-8 w-8" />,
            text: "Music",
            link: "/music"
        }
    ];

    return (
        <div className="absolute container mx-auto px-4 lg:px-8 max-w-7xl mb-8 hidden lg:block">
            <div className="flex items-center justify-between gap-12 max-w-3xl mx-auto">
                {buttons.map((button, index) => (
                    <button key={index} className="block p-6 h-20 bg-white text-black rounded-lg shadow-md flex items-center justify-center
                    shadow-md hover:shadow-lg hover:bg-gray-100">
                        {button.icon}
                        <span className="flex text-left ml-4 text-2xl">
                            {button.text}
                        </span>
                    </button>
                ))}

            </div>
        </div>
    );
};

export default EventMenu;