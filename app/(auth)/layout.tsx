'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowman } from '@fortawesome/free-solid-svg-icons'

//create a context to store the user's authentication status
import { createContext, useState } from 'react'
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

import { usePathname } from 'next/navigation';


export default function AuthLayout({ children, title }: { children: React.ReactNode, title: string }) {

  //Create a context to store the user's authentication status

  const pathname = usePathname();

  const titles = [
    {
      path: '/auth/login',
      title: 'Welcome back!'
    },
    {
      path: '/auth/register',
      title: 'Create an account'
    },
    {
      path: '/auth/sso',
      title: 'Single Sign On'
    },
    {
      path: '/auth/forgot-password',
      title: 'Forgot Password'
    },
    {
      path: '/auth/reset-password',
      title: 'Reset Password'
    },
    {
      path: '/auth/verify',
      title: 'Verify Account'
    },
    {
      path: '/auth/tenant',
      title: 'Select Tenant'
    },
    {
      path: '/auth/2fa',
      title: 'Two Factor Authentication'
    },
    {
      path: '/auth/invite',
      title: 'Invitation'
    }
  ]

  const secondaryLinks = [
    {
      path: '/auth/login',
      text: 'Already have an account?',
      url: '/auth/register',
      label: 'Register'
    },
    {
      path: '/auth/register',
      text: 'Not a member?',
      url: '/auth/login',
      label: 'Login'
    },
    {
      path: '/auth/sso',
      text: 'Use password instead?',
      url: '/auth/login',
      label: 'Login'
    },
  ]


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
        <div className="bg-white rounded-lg shadow-md w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[600px] rounded-lg shadow-md">
          <div className="col-span-1 hidden md:block rounded-l-lg">
            <div className="flex flex-col items-center justify-center  rounded-l-lg"  style={{ backgroundImage: 'url(/assets/img/people-collage-design.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center w-full p-8">
            <h1 className="text-3xl font-bold text-center mb-4">{titles.filter(t => t.path === pathname)[0].title}</h1>
            <div className="w-full">
            {children}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
