// with primary background color, 3 column layout, and stastical data with a name


// Path: components/Stats/DefaultStats.tsx

import React from 'react';

const SecondaryStats = () => {
    return (
        <div className="container mx-auto lg:px-8 max-w-7xl mb-8 bg-primary p-4 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg justify-center text-center">
                    <h3 className="text-3xl font-bold text-white">1000</h3>
                    <p className="text-base text-xl text-white">Total Users</p>
                </div>
                <div className="p-4 rounded-lg justify-center text-center">
                    <h3 className="text-3xl font-bold text-white">1000</h3>
                    <p className="text-base text-xl text-white">Total Orders</p>
                </div>
                <div className="p-4 rounded-lg justify-center text-center hidden md:block">
                    <h3 className="text-3xl font-bold text-white">$1000</h3>
                    <p className="text-base text-xl text-white">Total Revenue</p>
                </div>
                <div className="p-4 rounded-lg justify-center text-center hidden md:block">
                    <h3 className="text-3xl font-bold text-white">200</h3>
                    <p className="text-base text-xl text-white">Total Products</p>
                </div>
            </div>
        </div>
    );
}

export default SecondaryStats;