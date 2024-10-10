import React from "react";

const CarouselItem = () => {
    return (
        <div className="flex items-center justify-center h-full w-full min-h-[400px]"
            style={{
                background: "url(https://picsum.photos/1920/1080?grayscale) center / cover",
            }}
        >
            <div className="flex justify-center items-center bg-black bg-opacity-50 h-full w-full">
                <div className="items-center justify-center">
                    <div className="p-4 text-white text-center">
                        <h2 className="text-3xl font-extrabold text-left mt-4 mb-4 text-center">
                            PEGASUS IU KIT IS JUST AROUND THE CORNER
                        </h2>

                        <div className="text-3xl font-extrabold text-left mt-4 mb-4 text-center">
                            <button className="btn btn-ghost border-2 border-white text-white">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
