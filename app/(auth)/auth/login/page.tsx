'use client';
import AxiosInstance from '@/libs/axios';
import { AuthService } from '@/services/AuthService';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const LoginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");



    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        await AuthService.login(email as string, password as string);
    }

    return (
        <>
            <div className="space-y-6">
                <div>
                    <button
                        type="button"
                        className="block w-full py-2.5 bg-primary text-white font-semibold rounded-lg shadow-md"
                    >
                        <span className="flex items-center justify-center">
                           Create an account
                        </span>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-400 font-semibold">Or</span>
                </div>
                <div>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email as string}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            placeholder="Email address"
                            className={"block w-full rounded-lg border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-primary sm:text-sm sm:leading-6 h-12"}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    </div>
                    <div className="relative mt-2">
                        <Link className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none" href="/auth/forgot-password">
                            <FontAwesomeIcon icon={faQuestion} className="h-5 w-5 text-primary" aria-hidden="true" />
                        </Link>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password as string}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            placeholder="Password"
                            className={"block w-full rounded-lg border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-primary sm:text-sm sm:leading-6 h-12"}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full py-2.5 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Sign in
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        className="btn text-sm text-white font-semibold leading-6 bg-[#ff0050] rounded-lg"
                    >
                        <FontAwesomeIcon icon={faTiktok} className="h-4 w-4" aria-hidden="true" />
                        <span className="ml-2">Sign In</span>
                    </button>
                    <button
                        type="button"
                        className="btn text-sm text-white font-semibold leading-6 bg-[#1C274C] rounded-lg"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden="true" />
                        <span className="ml-2">Sign In</span>
                    </button>
                    <button
                        type="button"
                        className="btn text-sm text-white font-semibold leading-6 bg-[#3b5998] rounded-lg"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" aria-hidden="true" />
                        <span className="ml-2">Sign In</span>
                    </button>
                </div>
            </div>
        </>
    );
};

LoginPage.layout = "auth";

export default LoginPage;