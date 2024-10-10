'use client'
import { US , TR } from 'country-flag-icons/react/3x2'
import React, { useState, useEffect, useRef } from 'react';


const LanguageSelector = () => {

    const [language, setLanguage] = useState('TR');

    const modalRef = useRef(null);

    const languageArray = [
        { name: 'Türkçe', label: 'Türkçe', lang: 'TR' , icon: <TR className='h-6 w-6'/>},
        { name: 'English', label: 'English', lang: 'US' , icon: <US className='h-6 w-6'/>},
    ]


    const openModal = () => {
        if (modalRef.current) { (modalRef.current as any).showModal(); }
    }
    return (
        <>

                <div className="select-none flex h-8 items-center justify-center font-semibold text-white px-2 hover:bg-gray-800 cursor-pointer"
                onClick={openModal}>
                    <span className="flex items-center gap-2">
                         {languageArray.find(item => item.lang === language)?.icon} {languageArray.find(item => item.lang === language)?.label}</span>
                </div>

                <dialog id="language_modal" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
        </>

    );
}

export default LanguageSelector;
