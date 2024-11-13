"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { docsConfig } from "@/config/docs";
import { useScroll } from "@/hooks/use-scroll";
import { Skeleton } from "@/components/ui/skeleton";
import { ModalContext } from "@/components/modals/providers";
import LogoDark from '@/public/logo_dark.png'
import LogoWhite from '@/public/logo_light.png'
import Image from "next/image";
import MobileMenu from "./mobile-menu";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { data: session, status } = useSession();
  const { setShowSignInModal } = useContext(ModalContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen , setIsOpen] = useState(false);


  const configMap = {
    docs: docsConfig.mainNav,
  };

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Set the `isScrolled` state based on whether the user has scrolled down or not
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header>

      <div
        className={`top-nav fixed top-0 left-0 w-full py-2 text-center duration-500 transition-all bg-primary1 z-10 origin-top ${isScrolled ? 'scale-y-0' : 'scale-y-100'
          }`}
        id="top-nav"
      >
        <p className="max-lg:text-sm text-paragraph dark:text-paragraph font-medium">
          Transform Your Content Creation with Our AI-Powered Tool
        </p>
      </div>



      <header
        className={`fixed left-0 top-15 z-[1000000000] duration-500 transition-all w-full bg-transparent ${isSticky ? 'nav-sticky' : ''}`}
        id="mainnavigationBar"
      >
        <nav className="container flex relative items-center">
          <div className="nav-logo">
            <Link href="/">
              <Image src={LogoDark} width={180} alt="logo" className="dark:hidden" />
              <Image
                width={180}
                src={LogoWhite}
                alt="logo dark version"
                className="hidden dark:inline-block"
              />
            </Link>
          </div>
          <ul className="nav-list hidden lg:flex lg:ml-7 xl:ml-15  [&>*:not(:last-child)]:me-1">

            <li>
              <Link
                href="/"
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent  hover:border-borderColour dark:hover:bg-dark-200 
    dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                href="/features"
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent  hover:border-borderColour dark:hover:bg-dark-200 
    dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent  hover:border-borderColour dark:hover:bg-dark-200 
    dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent  hover:border-borderColour dark:hover:bg-dark-200 
    dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
              >
                Contact Us
              </Link>
            </li>

          </ul>
          <ul className="flex items-center ml-auto  [&>*:not(:last-child)]:me-2.5">

            {
              status == "loading" ? <Skeleton /> : <>
                {status == "authenticated" ? <>
                  <li className="max-lg:hidden">
                    <a href="/dashboard" className="btn btn-navbar btn-sm">
                      Dashboard
                    </a>
                  </li>
                </> : <>
                  <li className="max-lg:hidden">
                    <Link href="/login" className="btn btn-navbar btn-sm">
                      Sign In
                    </Link>
                  </li>
                </>}
              </>
            }




            <li className="max-lg:inline-block lg:hidden " onClick={() => {setIsOpen(!isOpen)}}>
              <button className="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={14}
                  viewBox="0 0 22 14"
                  fill="none"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </header>


    </header>
  );
}
