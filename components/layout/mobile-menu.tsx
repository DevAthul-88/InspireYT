import Link from 'next/link';
import React, { useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { useSession } from 'next-auth/react';

function MobileMenu({ isOpen, setIsOpen }) {

    const { data: session, status } = useSession();
    return (
        <div className={`mobile-menu max-lg:overflow-y-auto ${isOpen ? 'open' : 'hidden'}`}>
        <button
          onClick={() => { setIsOpen(false) }}
          className="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      
        <ul className="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full relative">
          <li>
            <Link
              href={'/'}
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500"
            >
              Home
            </Link>
          </li>
      
          <li>
            <Link
              href={'/features'}
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500"
            >
              Features
            </Link>
          </li>
      
          <li>
            <Link
              href={'/pricing'}
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500"
            >
              Pricing
            </Link>
          </li>
      
          <li>
            <Link
              href={'/contact'}
              className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500"
            >
              Contact Us
            </Link>
          </li>
      
          {
            status == "loading" ? <Skeleton /> : <>
              {status == "authenticated" ? <>
                <li>
                  <a href="/dashboard" className="btn btn-navbar btn-sm">
                    Dashboard
                  </a>
                </li>
              </> : <>
                <li>
                  <Link href="/login" className="btn btn-navbar btn-sm">
                    Sign In
                  </Link>
                </li>
              </>}
            </>
          }
        </ul>
      </div>
      

    );
}

export default MobileMenu;
