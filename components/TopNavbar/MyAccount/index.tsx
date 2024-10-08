'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const MyAccount = () => {

    const router = useRouter();

    return (
        <>
            <div className="select-none flex h-12 items-center justify-center font-semibold text-white px-2 hover:bg-gray-800 cursor-pointer"
                onClick={() => router.push('/myaccount')}>
                <span>My Account</span>
            </div>
        </>
    );
}

export default MyAccount;
