import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { isMobile } from "react-device-detect";
import { Bell, Globe, TextIndent  } from "@phosphor-icons/react";
import i18n from "i18next";

export default function NaviBar (){
  const {t} = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuGlobeOpen, setMenuGlobeOpen] = useState(false);
  const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    fr: { nativeName: 'Français' },
  };
  const navItems = [
    { path: '/home', label: t('nav-title.home') },
    { path: '/clients', label: t('nav-title.customer') },
    { path: '/products', label: t('nav-title.products') },
  ];

  function onProfileClick(){
    //Fait quelque chose quand je clic sur le Profile
    console.log("JE VIENS DE CLICKER");
    console.log("LA VALEUR MENUOPN AVANT : "+ menuOpen);
    setMenuOpen(!menuOpen);
    console.log("LA VALEUR MENUOPN APRES : "+ menuOpen);
  }

  function onBeltClick(){
    window.confirm(`J'ai cliqué sur la cloche.`);
    window.location.reload();
  }

  function onGlobeClick(){
    console.log("JE VIENS DE CLICKER");
    setMenuGlobeOpen(!menuGlobeOpen);
  }

  if (isMobile){
    return (
      <div className="min-h-full">
        <nav className="bg-gray-800">

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a href='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Accueils</a>
            <a href='/clients' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Clients</a>
            <a href='/products' className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projets</a>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img className="size-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base/5 font-medium text-white">Tom Cook</div>
                <div className="text-sm font-medium text-gray-400">tom@example.com</div>
              </div>
              <button type="button" className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a href="/profile" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
            </div>
          </div>
        </div>

        <div className="-mr-2 flex md:hidden">
          <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        </nav>
      </div>
    );
  }

  return (

    <div className="min-h-full">
      <nav className="bg-gray-800">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <TextIndent size={32} className="bg-white"/>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <a
                        key={item.path}
                        href={item.path}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${location.pathname === item.path ? 'active' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                    >
                      {item.label}
                    </a>
                ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-9 flex items-center md:ml-6">
                <div className="relative inline-block text-left">
                  {/* BOUTON LANGUES */}
                  <button
                      type="button"
                      data-dropdown-toggle="language-dropdown-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white dark:text-gray-100 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={onGlobeClick}>
                    <Globe size={28}/>
                  </button>


                  {/* <!-- Dropdown -->*/}
                  {menuGlobeOpen && (
                      <div
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                          role="menu" aria-orientation="vertical"
                          id="language-dropdown-menu">
                        {Object.keys(lngs).map((lng) => (
                            <button
                                className={"block rounded-full py-2 px-3 text-sm cursor-pointer tracking-wider text-gray-900 "}
                                key={lng} type="submit"
                                onClick={() => {
                                  i18n.changeLanguage(lng);
                                  setMenuGlobeOpen(false);
                                }}>
                              {lngs[lng].nativeName}
                            </button>
                        ))}
                      </div>)}
                </div>

                {/* BOUTON CLOCHE */}
                <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={onBeltClick}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <Bell size={28}/>
                </button>

                {/* MENU PROFILE */}
                <div className="relative ml-3">
                  <div>
                    <button
                        type="button"
                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={onProfileClick}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="size-8 rounded-full"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                           alt=""/>
                    </button>
                  </div>


                  {menuOpen && (
                      <div
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                          role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1²">
                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-0">{t('usernav-title.profile')}</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-1">{t('usernav-title.settings')}</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1"
                           id="user-menu-item-2">{t('usernav-title.sign-out')}</a>
                      </div>)
                  }

                </div>
              </div>
            </div>


          </div>
        </div>

      </nav>
    </div>

  );


}
