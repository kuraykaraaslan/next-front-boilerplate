// create a card with picture centered and a title and description below

// Path: components/Sponsors/DefaultSponsors.tsx

import React from 'react';

const SponsorCard = () => {
    return (
        <div className="caresoul-item bg-white grid grid-cols-12 gap-4 p-4">
            <div className="col-span-12 justify-center flex max-w-[150px] mx-auto">
                <img src="https://via.placeholder.com/150" alt="sponsor" className="mx-auto" />
            </div>
        </div>
    );
}

export default SponsorCard;