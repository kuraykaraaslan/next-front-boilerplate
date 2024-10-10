'use client';
import AuthLayout from '@/layouts/AuthLayout';
import React, { useState, useEffect } from 'react'
import { PhoneInput } from 'react-international-phone';
import '@/styles/PhoneInput.style.css';
import { useSearchParams } from 'next/navigation';

import { AuthService } from '@/services/AuthService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const TFA = () => {

    const { user } = AuthService;

    const searchParams = useSearchParams();

    const canUseEmail = AuthService.OTPCanUseEmail;
    const canUsePhone = AuthService.OTPCanUsePhone;

    const [emailVerificationCode, setEmailVerificationCode] = useState('');
    const [phoneVerificationCode, setPhoneVerificationCode] = useState('');

    //differentiate between email and phone
    const [lastEmailSent, setLastEmailSent] = useState<Date | null>(null);
    const [lastPhoneSent, setLastPhoneSent] = useState<Date | null>(null);

    const [timeLeftEmail, setTimeLeftEmail] = useState(0);
    const [timeLeftPhone, setTimeLeftPhone] = useState(0);

 
    const [method, setMethod] = useState('email');

    const emailTimeout = 120;
    const phoneTimeout = 300;


    const sendOTPMail = () => {
        // Send OTP Mail
        setLastEmailSent(new Date());
        AuthService.sendEmailOTP();
    }

    const sendOTPPhone = () => {
        // Send OTP Phone
        setLastPhoneSent(new Date());
        AuthService.sendPhoneOTP();
    }


    const verifyPhone = () => {
        // Verify Phone
    }

    const verifyEmailOTP = async () => {
        // Verify Email
        await AuthService.verifyEmailOTP(emailVerificationCode);

    }

    useEffect(() => {
        if (!AuthService.token) {
            AuthService.router?.push("/auth/login");
        }
    } , []);


    useEffect(() => {
        if (lastEmailSent) {
            const interval = setInterval(() => {
                const now = new Date();
                const diff = Math.floor((lastEmailSent.getTime() + emailTimeout * 1000 - now.getTime()) / 1000);
                if (diff <= 0) {
                    clearInterval(interval);
                    setTimeLeftEmail(0);
                } else {
                    setTimeLeftEmail(diff);
                }
            }, 1000);
            return () => clearInterval(interval);
        }


    }, [lastEmailSent]);

    useEffect(() => {
        if (lastPhoneSent) {
            const interval = setInterval(() => {
                const now = new Date();
                const diff = Math.floor((lastPhoneSent.getTime() + phoneTimeout * 1000 - now.getTime()) / 1000);
                if (diff <= 0) {
                    clearInterval(interval);
                    setTimeLeftPhone(0);
                } else {
                    setTimeLeftPhone(diff);
                }
            }, 1000);
            return () => clearInterval(interval);
        }

    }, [lastPhoneSent]);


    return (
        <>
            <div role="tablist" className="tabs tabs-boxed -mt-4 -mx-4 mb-4">
                <button onClick={() => setMethod('email')} className={`tab ${method === 'email' ? 'tab-active text-white' : ''}`} disabled={!canUseEmail}
                    >Email</button>
                <button onClick={() => setMethod('phone')} className={`tab ${method === 'phone' ? 'tab-active text-white' : ''}`} disabled={!canUsePhone}
                    >Phone</button>
            </div>
            <div className="space-y-6">
                {method === 'email' ? (
                    <>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email Verification Code
                            </label>
                            <div className="relative mt-2">
                                    {timeLeftEmail <= 0 ? (
                                        <button onClick={sendOTPMail} className={"absolute right-2 top-2 text-sm font-semibold text-primary"}
                                        >
                                            <span className="text-sm font-semibold text-primary mr-2">Send Now</span>
                                        </button>
                                    ) : (
                                        <button className={"absolute right-2 top-2 text-sm font-semibold"} disabled>
                                            <span className="text-sm font-semibold mr-2">Resend in {timeLeftEmail} seconds</span>
                                        </button>
                                    )}

                                <input
                                    id="emailVerificationCode"
                                    name="emailVerificationCode"
                                    type="emailVerificationCode"
                                    onChange={(e) => setEmailVerificationCode(e.target.value)}
                                    value={emailVerificationCode}
                                    required
                                    autoComplete="emailVerificationCode"
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={verifyEmailOTP}
                                className="block w-full py-2.5 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Verify
                            </button>
                        </div>
                    </>

                ) : (
                    <>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6">
                                Phone Verification Code
                            </label>
                            <div className="relative mt-2">
                                {timeLeftPhone <= 0 ? (
                                    <button onClick={sendOTPPhone} className={"absolute right-2 top-2 text-sm font-semibold text-primary"}
                                    >
                                        <span className="text-sm font-semibold text-primary mr-2">Send Now</span>
                                    </button>
                                ) : (
                                    <button className={"absolute right-2 top-2 text-sm font-semibold"} disabled>
                                        <span className="text-sm font-semibold mr-2">Resend in {timeLeftPhone} seconds</span>
                                    </button>
                                )}
                         
                                <input
                                    id="phoneVerificationCode"
                                    name="phoneVerificationCode"
                                    type="phoneVerificationCode"
                                    required
                                    autoComplete="phoneVerificationCode"
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="block w-full py-2.5 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Verify
                            </button>
                        </div>
                    </>
                )}

            </div>
        </>
    );


}

export default TFA;