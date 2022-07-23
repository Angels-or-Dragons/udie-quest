import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import { Transition } from "@headlessui/react";
import { StaticImage } from 'gatsby-plugin-image';
// Toggle Theme
import Toggle from 'react-toggle';
import { ThemeContext } from '../../context/themeContext';
import { IoMdSunny } from 'react-icons/io';
import { RiMoonClearFill } from 'react-icons/ri';
// Data pour le menu (TODO - auto routes)
import { navbarData } from './data';

export default function Navbar(props) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const [isSubOpen, setIsSubOpen] = useState({});

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    let subOpen = {};
    for(let item in navbarData) {
      subOpen[item.name] = false;
    }
    setIsSubOpen(subOpen);
  },[])

  return (
    <div>
      <nav className="bg-secondary border-solid border-b-2 border-sky-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                <StaticImage
                  src='../../images/logo.png'
                  alt='UdieQuest'
                  height={50}
                />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navbarData.map((item, index) => {
                    return (
                      <div key={`item-${index}`} onMouseEnter={() => setIsSubOpen({[item.name]: true})} onMouseLeave={() => setIsSubOpen({[item.name]: false})}>
                        <Link 
                          className=" cursor-pointer secondary-text hover:bg-primary hover:primary-text px-3 py-2 rounded-md text-sm font-medium"
                          to={`${item.link}`} 
                        >{item.name}</Link>
                        <div className={` ${!isSubOpen[item.name] && 'hidden'} origin-top-right absolute mt-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                          {item.submenu.map((subitem, index) => {
                            return (
                              <Link key={`subitem-${index}`}
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-primary hover:text-white" 
                                to={`${subitem.link}`} 
                              >{subitem.name}</Link>
                            )
                          })}
                        </div>
                      </div>   
                    )
                  })}

                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-3 md:mr-0 relative">
                <Toggle
                  id="theme-toggle"
                  checked={theme === 'light' ? true : false}
                  onChange={handleThemeToggle}
                  icons={{
                    checked: <IoMdSunny color='#FFFF00'/>,
                    unchecked: <RiMoonClearFill color='#6f698f' />,
                  }}
                />
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:primary-text hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navbarData.map((item, index) => {
                    return (
                      <div key={`item-${index}`} onMouseEnter={() => setIsSubOpen({[item.name]: true})} onMouseLeave={() => setIsSubOpen({[item.name]: false})}>
                        <Link 
                          className=" cursor-pointer secondary-text hover:bg-primary hover:primary-text block px-3 py-2 rounded-md text-base font-medium"
                          to={`${item.link}`} 
                        >{item.name}</Link>
                        <div className="mt-3 px-2 space-y-1"> 
                          {item.submenu.map((subitem, index) => {
                            return (
                              <Link key={`subitem-${index}`}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-primary hover:text-white" 
                                to={`${subitem.link}`} 
                              >{subitem.name}</Link>
                            )
                          })}
                        </div>
                      </div>   
                    )
                  })}
              </div>
            </div>
        </Transition>
      </nav>
    </div>
  );
}
