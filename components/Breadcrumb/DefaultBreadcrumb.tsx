// with primary background color, 3 column layout, and stastical data with a name


// Path: components/Stats/DefaultBreadcrumb.tsx

import React from 'react';

const DefaultBreadcrumb = (props: { title: string; }) => {

    let title = props.title || "Default Title";

    return (
        <div className="lg:px-8 mb-8 bg-gray-500 p-4 shadow-lg">
            <div className="max-w-7xl justify-center text-left mx-auto lg:px-8">
                <h3 className="text-2xl text-white">{title}</h3>
           

            </div>
        </div>
    );
}

export default DefaultBreadcrumb;