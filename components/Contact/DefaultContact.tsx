//give me a contact form

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin, faGithub, faXTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const DefaultContact = () => {

    const formSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted");
    }

    return (
        <div className="container mx-auto lg:px-8 max-w-7xl mb-8 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <img className="w-full h-full" src="https://placehold.co/400x400" alt="About Us" />
                </div>
                <div className="w-full lg:w-7/12 ">
                    <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 order-1 md:order-2">
                        <h1 className="text-4xl font-bold">Contact us</h1>
                        <form action="#" onSubmit={formSubmit}>

                            <div className="mt-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                                <input type="text" id="name" className="block p-3 w-full text-sm  border border-1 border-gray-500 bg-gray-100 text-black" placeholder="John Doe" required />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email" id="email" className="block p-3 w-full text-sm  border border-1 border-gray-500 bg-gray-100 text-black" placeholder="username@provider.com" required />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                                <input type="tel" id="phone" className="block p-3 w-full text-sm  border border-1 border-gray-500 bg-gray-100 text-black" placeholder="+1 555 555 55 55" required />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea id="message" className="block p-2.5 w-full text-sm  border border-1 border-gray-500 min-h-[150px] bg-gray-100 resize-none text-black" placeholder="Your message" required></textarea>
                            </div>
                            <button type="submit" className="mt-2 py-3 px-5 text-sm font-medium bg-base-300  hover:bg-primary hover:text-white focus:outline-none focus:bg-primary-600 border border-1 border-gray-500 light:placeholder-black" onClick={() => formSubmit}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultContact;

