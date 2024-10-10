'use client'
import { useSearchParams } from 'next/navigation'
import React , { useState } from 'react';
import { AuthService } from '@/services/AuthService';

import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerifyPage = () => {

    const searchParams = useSearchParams();
    const cameFromParam = searchParams.get('code') !== "" ? true : false;

    const [email, setEmail] = useState(searchParams.get('email') || '');
    const [code, setCode] = useState(searchParams.get('code') || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("email: " + email, "code: " + code);

        AuthService.verify(email, code).then((response: any) => {
            console.log(response);
        }).catch((error: any) => {
            console.log(error);
        });

    }

    const handleResend = (e: React.MouseEvent) => {

        e.preventDefault();
        console.log("Resend verification code");
        AuthService.resendVerification(email).then((response: any) => {
            console.log(response);
        }
        ).catch((error: any) => {
            console.log(error);
        });
    }
    
    return (
        <>
            <div className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="code" className="block text-sm font-medium leading-6">
                            Verification Code
                        </label>
                        <div className="relative mt-2">
                            <button onClick={handleResend} className={"absolute right-2 top-2 text-sm font-semibold text-primary" }
                            disabled={!cameFromParam}>
                             <FontAwesomeIcon icon={faRotateRight} className="w-5 h-5" />
                            </button>
                            <input
                                id="code"
                                name="code"
                                type="text"
                                required
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                autoComplete="code"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full py-2.5 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
};


export default VerifyPage;