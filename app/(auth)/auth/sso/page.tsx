'use client'
import AuthLayout from '@/layouts/AuthLayout';
import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faApple, faTwitter, faFacebook, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

import { toast } from 'react-toastify';

import { AuthService } from '@/services/AuthService';


const SingleSignOnPage = () => {

    const searchParams = useSearchParams();

    const handleGithub = () => {
       
        AuthService.ssoLogin('github');
    }

    const handleSSO = (e: React.MouseEvent<HTMLButtonElement>) => {
        AuthService.ssoLogin(e.currentTarget.getAttribute('data-provider') as string);
    }

    useEffect(() => {

        if (searchParams.get('error')) {
            toast?.error(searchParams.get('error') as string);   
            console.log("Error: " + searchParams.get('error'));
        }   


        if (searchParams.get('token')) {
            console.log("Token: " + searchParams.get('token'));
        }

        if (searchParams.get('token') === "" || searchParams.get('token') === null) {
         return;
        }

        AuthService.ssoCallback(searchParams.get('token') as string);

    } , [searchParams]);



    return (
        <>
            <div className="space-y-6">
                <div>
                    <button
                        type="submit"
                        data-provider="google"
                        onClick={handleSSO}
                        className="btn btn-block w-full py-2.5 bg-[#DB4437] text-white hover:text-[#DB4437] hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2 w-5 h-5" />
                        <span>Sign in with Google</span>
                    </button>
                </div>

                <div>
                    <button
                        type="submit"
                        data-provider="github"
                        onClick={handleSSO}
                        className="btn  btn-block w-full py-2.5 bg-[#333] text-white hover:text-[#333] hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2 w-5 h-5" />
                        <span>Sign in with GitHub</span>
                    </button>
                </div>

                <div>
                    <button
                        type="submit"
                        data-provider="apple"
                        onClick={handleSSO}
                        className="btn btn-block w-full py-2.5 bg-[#000] text-white hover:text-[#000] hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faApple} className="mr-2 w-5 h-5" />
                        <span>Sign in with Apple</span>
                    </button>
                </div>

                <div>
                    <button
                        type="submit"
                        data-provider="microsoft"
                        onClick={handleSSO}
                        className="btn  btn-block w-full py-2.5 bg-[#1DA1F2] text-white hover:text-[#1DA1F2] hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="mr-2 w-5 h-5" />
                        <span>Sign in with Twitter</span>
                    </button>
                </div>

                <div>
                    <button
                        type="submit"
                        data-provider="facebook"
                        onClick={handleSSO}
                        className="btn  btn-block w-full py-2.5 bg-[#1877F2] text-white hover:text-[#1877F2] hover:bg-white"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="mr-2 w-5 h-5" />
                        <span>Sign in with Facebook</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SingleSignOnPage;