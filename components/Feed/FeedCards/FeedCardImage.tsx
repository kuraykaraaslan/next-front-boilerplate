// feed card for a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

import React from 'react';

const FeedCardImage = () => {
    return (
        <div className="bg-white grid grid-row-2 grid-cols-12 gap-4 p-4">
            <div className="col-span-12 justify-center flex">
                <img src="https://via.placeholder.com/1200x600" alt="feed image" className="w-full h-64 object-cover" />
            </div>
            <div className="col-span-12 justify-center">
                <h3 className="text-xl font-bold">Title</h3>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero lacinia ultrices
                    nec sit amet nunc. Nullam nec orci sit amet nunc. Nullam nec orci.</p>
            </div>
            <div className="col-span-12 justify-between flex">
                <div className="flex items-center flex-row gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500 h-6 w-6" />
                    <p className="text-gray-500 text-sm ml-2">May 20, 2021</p>
                </div>
                <div className="flex items-center gap-1">
                    <a href="#" className="text-primary">Read More</a>
                    <FontAwesomeIcon icon={faCaretRight} className="text-primary mt-1 h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default FeedCardImage;