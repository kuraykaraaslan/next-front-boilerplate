// feed card for a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

import React from 'react';

const EventCardPoster = () => {
    return (
        <div className="relative group bg-white gap-4 border border-gray-200 rounded-lg w-64 transition-all duration-1000 hover:shadow-lg h-96 flex flex-col overflow-hidden">
            <div className="col-span-12 justify-center flex rounded-t-lg overflow-hidden max-h-96  transform transition-all duration-1000 group-hover:scale-105">
                <img src="/assets/img/event/fandf9.jpg" alt="feed image" className="w-full h-96 object-scale rounded-t-lg" />
            </div>
            {/* 
            <div className="absolute bottom-0 w-full bg-white bg-opacity-0 p-4">
            
                <button className="bg-base-200 font-bold py-2 px-4 rounded-lg w-full border border-base-200 text-xl text-primary text-left">
                    500 TRY <FontAwesomeIcon icon={faCaretRight} className=" w-3 h-3 ml-2" />
                </button>
            </div>
            */}
        </div>
    );
};

export default EventCardPoster;