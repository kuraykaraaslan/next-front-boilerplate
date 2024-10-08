// feed card for a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

import React from 'react';

const EventCardImageSquare = () => {
    return (
        <div className="relative group bg-white gap-4 border border-gray-200 rounded-lg h-full flex flex-col overflow-hidden">
            <div className="col-span-12 justify-center flex rounded-t-lg overflow-hidden h-full transform transition-all duration-1000 group-hover:scale-105 bg-red-500">
                <img src="/assets/img/event/ajdapekkan.jpg" alt="feed image" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="absolute w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-1000 text-white">
                <div className="absolute bottom-0 w-full bg-opacity-0 p-4 hidden group-hover:block transition-all duration-1000">
                    <h3 className="text-2xl font-semibold mb-2">Ajda Pekkan</h3>
                    <h4 className="text-sm font-semibold text-white"><FontAwesomeIcon icon={faCalendar} className="text-white w-3 h-3 mr-2" /> May 20, 2021</h4>
                    <h5 className="text-white text-sm mt-2"><FontAwesomeIcon icon={faLocationDot} className="text-white w-3 h-3 mr-2" /> Istanbul, Turkey</h5>
                    <button className="bg-base-200 font-bold py-2 px-4 rounded-lg w-full border border-base-200 text-xl text-primary text-left mt-4">
                        500 TRY <FontAwesomeIcon icon={faCaretRight} className=" w-3 h-3 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCardImageSquare;