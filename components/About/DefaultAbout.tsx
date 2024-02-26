import React from "react";

const DefaultAbout = () => {
    return (
        <div className="container mx-auto lg:px-8 max-w-7xl mb-8 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Who We Are</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our mission is to provide the best possible experience for our customers and to help them achieve their goals. We are committed to providing the best possible service and to help our customers achieve their goals. We are committed to providing the best possible service and to help our customers achieve their goals. We are committed to providing the best possible service and to help our customers achieve their goals.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://placehold.co/800x400" alt="About Us" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center order-1 lg:order-2">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Once upon a time, in a land far far away, there was a company that was founded by a group of people who wanted to make a difference</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8 order-2 lg:order-1">
                    <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-4">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://placehold.co/200" alt="Img" />
                            <img className="md:hidden block" src="https://placehold.co/200" alt="Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Kuray</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://placehold.co/200" alt="Img" />
                            <img className="md:hidden block" src="https://placehold.co/200" alt="Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Kwan</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://placehold.co/200" alt="Img" />
                            <img className="md:hidden block" src="https://placehold.co/200" alt="Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Aria</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://placehold.co/200" alt="Img" />
                            <img className="md:hidden block" src="https://placehold.co/200" alt="Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Ezra</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultAbout;
