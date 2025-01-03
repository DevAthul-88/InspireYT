"use client";

import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { useSession } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import LogoDark from '@/public/_static/logo_dark.svg'
import LogoWhite from '@/public/_static/logo_white.svg'
import Image from "next/image";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {

  const { data: session, status } = useSession();

  return (
    <footer>

      <section className="bg-white dark:bg-dark-300 border-t overflow-hidden relative pt-20">
        <div className="container">
          <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
            <div className="col-span-12 lg:col-span-6">
              <Image
                src={LogoDark}
                width={100}
                alt="logo"
                className="inline-block dark:hidden mb-10"
              />
              <Image
                src={LogoWhite}
                alt="logo dark version"
                width={100}
                className="hidden dark:inline-block  mb-10"
              />
              <p className="max-w-[350px] max-lg:mx-auto">
                Unlock your creative potential and grow your YouTube channel with InspireYT, the ultimate AI-driven tool designed to generate trending video ideas, optimize tags and keywords, and provide performance insights.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-2 max-lg:text-center">
              <h3 className="mb-8 font-medium text-lg">Explore</h3>
              <ul className="[&>*:not(:last-child)]:mb-3">
                <li>
                  <a
                    href="about.html"
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="about.html"
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="about.html"
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                  >
                    Pricing
                  </a>
                </li>


                <li>
                  <a
                    href="about.html"
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                  >
                    Contact Us
                  </a>
                </li>

              </ul>
            </div>
            <div className="col-span-12 lg:col-span-2 max-lg:text-center">
              <h3 className="mb-8 font-medium text-lg">Resources</h3>
              <ul className="[&>*:not(:last-child)]:mb-3">

                {
                  status == "loading" ? <Skeleton /> : <>
                    {status == "authenticated" ? <>


                      <li>
                        <a
                          href="/dashboard"
                          className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                        >
                          Dashboard
                        </a>
                      </li>

                    </> : <>
                      <li>
                        <Link
                          href={'/login'}
                          className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                        >
                          Login
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={'/registration'}
                          className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                        >
                          Registration
                        </Link>
                      </li>
                    </>}
                  </>
                }



              </ul>
            </div>
            <div className="col-span-12 lg:col-span-2 max-lg:text-center">
              <h3 className="mb-8 font-medium text-lg">Get In touch</h3>
              <p className="mb-3">Need Support?</p>
              <p className="mb-3">
                <a
                  href="mailto:devathulvinod@gmail.com"
                  className="relative inline-block overflow-hidden text-base text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                >
                  devathulvinod@gmail.com
                </a>
              </p>
              <p className="mb-3">
                <a
                  href="tel:+391(0)355684593"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                >
                  +391 (0)35 2568 4593
                </a>
              </p>
              <ul className="flex items-center max-lg:justify-center social-link gap-4">
                <li>
                  <a href="#" className="transiton-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M26.25 14.0749C26.25 7.26802 20.7655 1.75 14 1.75C7.23451 1.75 1.75 7.26802 1.75 14.0749C1.75 20.2265 6.22962 25.3254 12.0859 26.25V17.6375H8.97559V14.0749H12.0859V11.3595C12.0859 8.27062 13.9148 6.5644 16.7129 6.5644C18.0528 6.5644 19.4551 6.80512 19.4551 6.80512V9.83819H17.9104C16.3888 9.83819 15.9141 10.7883 15.9141 11.764V14.0749H19.3115L18.7684 17.6375H15.9141V26.25C21.7704 25.3254 26.25 20.2265 26.25 14.0749Z"
                        fill=""
                        className="fill-paragraph dark:fill-gray-100 hover:fill-primary dark:hover:fill-primary"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 1.75C7.23187 1.75 1.75 7.23187 1.75 14C1.75 19.4206 5.25656 23.9991 10.1259 25.6222C10.7384 25.7294 10.9681 25.3619 10.9681 25.0403C10.9681 24.7494 10.9528 23.7847 10.9528 22.7587C7.875 23.3253 7.07875 22.0084 6.83375 21.3194C6.69594 20.9672 6.09875 19.88 5.57812 19.5891C5.14937 19.3594 4.53688 18.7928 5.56281 18.7775C6.5275 18.7622 7.21656 19.6656 7.44625 20.0331C8.54875 21.8859 10.3097 21.3653 11.0141 21.0437C11.1213 20.2475 11.4428 19.7116 11.795 19.4053C9.06938 19.0991 6.22125 18.0425 6.22125 13.3569C6.22125 12.0247 6.69594 10.9222 7.47687 10.0647C7.35437 9.75844 6.92562 8.50281 7.59937 6.81844C7.59937 6.81844 8.62531 6.49687 10.9681 8.07406C11.9481 7.79844 12.9894 7.66062 14.0306 7.66062C15.0719 7.66062 16.1131 7.79844 17.0931 8.07406C19.4359 6.48156 20.4619 6.81844 20.4619 6.81844C21.1356 8.50281 20.7069 9.75844 20.5844 10.0647C21.3653 10.9222 21.84 12.0094 21.84 13.3569C21.84 18.0578 18.9766 19.0991 16.2509 19.4053C16.695 19.7881 17.0778 20.5231 17.0778 21.6716C17.0778 23.31 17.0625 24.6269 17.0625 25.0403C17.0625 25.3619 17.2922 25.7447 17.9047 25.6222C20.3365 24.8012 22.4497 23.2383 23.9468 21.1534C25.4438 19.0685 26.2493 16.5667 26.25 14C26.25 7.23187 20.7681 1.75 14 1.75Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14.0037 2C9.04517 2 4.57804 4.9866 2.6827 9.56221C0.787361 14.1378 1.83395 19.409 5.33745 22.9125C8.84096 26.4161 14.1122 27.4626 18.6878 25.5673C23.2698 23.6783 26.2564 19.2112 26.2564 14.2527C26.2564 7.48819 20.7682 2 14.0037 2ZM10.4427 20.7045H7.76885V12.0893H10.4427V20.7045ZM9.1026 10.9151C8.47082 10.9151 7.90286 10.5386 7.66036 9.95787C7.41786 9.37715 7.54549 8.70708 7.9922 8.26036C8.43253 7.81365 9.1026 7.67964 9.68333 7.91576C10.2641 8.15188 10.647 8.71984 10.6533 9.34524C10.6533 10.2131 9.96412 10.9087 9.1026 10.9151ZM20.4555 20.7045H17.7816V16.5118C17.7816 15.5099 17.7625 14.2336 16.3904 14.2336C15.0184 14.2336 14.7759 15.3184 14.7759 16.4416V20.7045H12.1147V12.0893H14.6801V13.2635H14.7184C15.0758 12.5871 15.9437 11.8724 17.2455 11.8724C19.9513 11.8724 20.4491 13.6528 20.4491 15.9694V20.7045H20.4555Z"
                        fill="#7D807B"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.0604 11.9583C12.0604 11.0204 11.4224 11.0204 11.4224 11.0204H8.79375V13.0302H11.2565C11.684 13.0302 12.0604 12.8962 12.0604 11.9583Z"
                        fill=""
                      />
                      <path
                        d="M18.1408 13.0302C16.7499 13.0302 16.5521 14.4211 16.5521 14.4211H19.5125C19.5189 14.4211 19.538 13.0302 18.1408 13.0302Z"
                        fill="#7D807B"
                      />
                      <path
                        d="M11.4224 14.4211H8.80013V16.8328H11.1225C11.1608 16.8328 11.2182 16.8328 11.2884 16.8328C11.6648 16.8264 12.373 16.718 12.373 15.6589C12.373 14.4083 11.4224 14.4211 11.4224 14.4211Z"
                        fill="#7D807B"
                      />
                      <path
                        d="M14 1.75C7.24336 1.75 1.75 7.24336 1.75 14C1.75 20.7566 7.24336 26.25 14 26.25C20.7566 26.25 26.25 20.7566 26.25 14C26.25 7.24336 20.7566 1.75 14 1.75ZM16.1693 9.94857H19.8889V11.0587H16.1693V9.94857ZM14.2871 15.7737C14.2871 18.5236 11.4224 18.4342 11.4224 18.4342H6.73294V9.41901H11.4224C12.8516 9.41901 13.9745 10.2102 13.9745 11.818C13.9745 13.4322 12.5964 13.5342 12.5964 13.5342C14.4083 13.5342 14.2871 15.7737 14.2871 15.7737ZM21.2479 15.627H16.5776C16.5776 17.3049 18.1663 17.1965 18.1663 17.1965C19.6656 17.1965 19.6146 16.2267 19.6146 16.2267H21.2033C21.2033 18.8043 18.1152 18.6257 18.1152 18.6257C14.4147 18.6257 14.6508 15.1803 14.6508 15.1803C14.6508 15.1803 14.6444 11.7159 18.1152 11.7159C21.7583 11.7095 21.2479 15.627 21.2479 15.627Z"
                        fill=""
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </section>


      <div className="border-t py-4 bg-white dark:bg-dark-300">
        <div className="container flex max-w-6xl items-center justify-between">
          {/* <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span> */}
          <p className="text-left text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Athul Vinod
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
          </p>

          <div className="flex items-center gap-3">

            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
