// feed card for a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCaretRight } from '@fortawesome/free-solid-svg-icons';
// Path: components/Feed/FeedCard.tsx

import React from 'react';

const FeedCard = () => {
    return (
        <div className="bg-white grid grid-cols-12 gap-4 p-4">
            <div className="col-span-2 justify-center flex">
                {/* date */}
                <div className="box-border h-20 w-12 text-white flex flex-col items-center justify-center">
                    <div className="text-center text-3xl font-bold w-12 text-black bg-gray-100">12</div>
                    <div className="text-center text-lg bg-primary text-white w-12">Jan</div>
                </div>
            </div>
            <div className="col-span-10">
                <h3 className="text-xl font-bold">Title</h3>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero lacinia ultrices
                    nec sit amet nunc. Nullam nec orci sit amet nunc. Nullam nec orci.</p>
                <a href="#" className="text-sm justify-center">Read More <FontAwesomeIcon icon={faCaretRight} style={{ height: '1rem', width: '1rem' }} /></a>
            </div>



        </div>
    );
};

export default FeedCard;