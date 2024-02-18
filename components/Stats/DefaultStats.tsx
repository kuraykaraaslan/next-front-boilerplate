// with primary background color, 3 column layout, and stastical data with a name


// Path: components/Stats/DefaultStats.tsx

import React from 'react';

const DefaultStats = () => {
    return (
        <div className="container mx-auto lg:px-8 max-w-7xl mb-8">
            <h2 className="text-3xl font-bold text-left mt-4 mb-4">Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-white">Total Users</h3>
                    <p className="text-base text-white">1000</p>
                </div>
                <div className="bg-primary p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-white">Total Orders</h3>
                    <p className="text-base text-white">1000</p>
                </div>
                <div className="bg-primary p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-white">Total Revenue</h3>
                    <p className="text-base text-white">$1000</p>
                </div>
            </div>
        </div>
    );
};

export default DefaultStats;
