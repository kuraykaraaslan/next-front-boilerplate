'use client'
import React, { useState, useEffect, useRef } from 'react';


const CitySelector = () => {

    const [city, setCity] = useState('USNY');

    const modalRef = useRef(null);

    const cityArray = [
        { name: 'New York', label: 'New York', city: 'USNY' },
        { name: 'Los Angeles', label: 'Los Angeles', city: 'USLA' },
        { name: 'Chicago', label: 'Chicago', city: 'USCH' },
        { name: 'Miami', label: 'Miami', city: 'USMI' }
    ]


    const openModal = () => {
        if (modalRef.current) { (modalRef.current as any).showModal(); }
    }


    return (
        <>
            <div className="select-none flex h-12 items-center justify-center font-semibold text-white px-2 hover:bg-gray-800 cursor-pointer"
                onClick={openModal}>
                <span>{cityArray.find(item => item.city === city)?.label}</span>
            </div>

            <dialog id="city_modal" className="modal" ref={modalRef}>
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

export default CitySelector;
