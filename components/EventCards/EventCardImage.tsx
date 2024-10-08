// feed card for a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

import React from 'react';

const EventCardImage = () => {
    return (
        <div className="relative group bg-white gap-4 border border-gray-200 rounded-lg w-64 transition-all duration-1000 hover:shadow-lg h-96 flex flex-col overflow-hidden">
            <div className="col-span-12 justify-center flex rounded-t-lg overflow-hidden max-h-64 group-hover:max-h-24 transform transition-all duration-1000 group-hover:scale-105">
                <img src="/assets/img/artist/zeki_muren.webp" alt="feed image" className="w-full h-64 object-cover rounded-t-lg" />
            </div>
            <div className="col-span-12 justify-center px-4 pt-2">
                <h3 className="text-2xl font-semibold mb-2">Saygı ve Özlemle</h3>
                <h4 className="text-sm font-semibold text-gray-500"><FontAwesomeIcon icon={faCalendar} className="text-gray-500 w-3 h-3 mr-2" /> May 20, 2021</h4>
                <h5 className="text-gray-500 text-sm mt-2"><FontAwesomeIcon icon={faLocationDot} className="text-gray-500 w-3 h-3 mr-2" /> Istanbul, Turkey</h5>
            </div>
            <div className="col-span-12 justify-center px-4 pb-4">
                <button className="bg-base-200 font-bold py-2 px-4 rounded-lg w-full border border-base-200 text-xl text-primary text-left">
                    500 TRY <FontAwesomeIcon icon={faCaretRight} className=" w-3 h-3 ml-2" />
                </button>
            </div>
            <div className="col-span-12 justify-center px-4 pb-4 translate-y-24 group-hover:translate-y-0 absolute bottom-0 bg-white bg-opacity-0 transition-all duration-1000 opacity-0 group-hover:opacity-100">
                <span className="text-gray-500 text-sm">Sanat güneşinin 20. ölüm yıldönümü anısına verilecek olan bu konser, Zeki Müren'in en sevilen şarkılarından oluşacak.</span>
            </div>
        </div>
    );
};

export default EventCardImage;