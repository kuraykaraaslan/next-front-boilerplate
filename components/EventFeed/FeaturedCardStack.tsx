import React from 'react';

import EventCardImageSquare from '../EventCards/EventCardImageSquare';



const FeaturedCardStack: React.FC = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="col-span-2 md:col-span-2 bg-gray-200 aspect-square">
                <EventCardImageSquare />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2">
                <div className="col-span-1 bg-gray-200 aspect-square">
                 <EventCardImageSquare />
                </div>
                <div className="col-span-1 bg-gray-200 aspect-square">
                <EventCardImageSquare />
                </div>
                <div className="col-span-1 bg-gray-200 aspect-square">
                 <EventCardImageSquare />
                </div>
                <div className="col-span-1 bg-gray-200 aspect-square">
                  <EventCardImageSquare />
                </div>
            </div>



        </div>
    );
};

export default FeaturedCardStack;