'use client'
import { useSearchParams } from 'next/navigation'
import React , { useState , useEffect } from 'react';
import { AuthService } from '@/services/AuthService';

import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChangeTenant = () => {

    useEffect(() => {
        AuthService.fetchUserTenants().then((response: any) => {
            console.log(response);
        }).catch((error: any) => {
            console.log(error);
        } );
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


    }

    const handleResend = (e: React.MouseEvent) => {

        e.preventDefault();
        console.log("Resend verification code");

    }
    
    return (
        <>
            <div className="space-y-6">
                <div>
                    <label htmlFor="tenant" className="block text-sm font-medium leading-6">
                        Choose Tenant
                    </label>
                    <div className="mt-2">
                    <select
                        id="tenant"
                        name="tenant"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    >
                        <option value="tenant1">Tenant 1</option>
                        <option value="tenant2">Tenant 2</option>
                        <option value="tenant3">Tenant 3</option>
                    </select>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full py-2.5 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Change Tenant
                    </button>
                </div>
            </div>
        </>
    );
};


export default ChangeTenant;