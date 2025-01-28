import React, {Suspense, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {ArrowBendRightDown, MagnifyingGlass } from "@phosphor-icons/react";

import UserEditModal from '../components/modals/useredit';
import { CLIENTS_LIST } from '../utils/samples';

function Page() {
    const {t} = useTranslation();
    const [menuActionOpen, setMenuActionOpen] = useState(false);
    const [openUserEditMoal, setOpenUserEditModal] = useState(false);


    function onActionClick(){
        //Fait quelque chose quand je clic sur le Dropdown Menu
        setMenuActionOpen(!menuActionOpen);
    }



    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {t('header-title.customer')}
                    </h1>
                </div>
            </header>
            <main className="bg-white shadow">
                    <div className="relative overflow-x-auto px-6 sm:rounded-lg">
                        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                            <div>
                                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
                                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                        onClick={onActionClick}>
                                    <span className="sr-only">Action button</span>
                                    Actions
                                    <ArrowBendRightDown size={10}/>
                                </button>
                                {/*Dropdown Menu*/}
                                {menuActionOpen && (
                                    <div id="dropdownAction" className=" absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownActionButton">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate
                                                account</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                            User</a>
                                    </div>
                                </div>)}

                            </div>
                            <label htmlFor="table-search" className="sr-only">Search</label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <MagnifyingGlass size={16} color="rgb(107 114 128)"/>
                                </div>
                                <input type="text" id="table-search-users"
                                       className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search for users"/>
                            </div>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/images/profile/profile-picture-1.jpg"
                                         alt="Jese image"/>
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Neil Sims</div>
                                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    React Developer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button 
                                        type="button" 
                                        onClick={() => (setOpenUserEditModal(true))}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit user
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/images/profile/profile-picture-3.jpg"
                                         alt="Jese image"/>
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Bonnie Green</div>
                                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    Designer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                        user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/images/profile/profile-picture-2.jpg"
                                         alt="Jese image"/>
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Jese Leos</div>
                                        <div className="font-normal text-gray-500">jese@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    Vue JS Developer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                        user</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/images/profile/profile-picture-5.jpg"
                                         alt="Jese image"/>
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Thomas Lean</div>
                                        <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    UI/UX Engineer
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                        Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                        user</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/images/profile/profile-picture-4.jpg"
                                         alt="Jese image"/>
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Leslie Livingston</div>
                                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    SEO Specialist
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                        Offline
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                        user</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {openUserEditMoal && <UserEditModal setOpenUserEditModal={setOpenUserEditModal}/>}
            </main>
        </div>

    );
}

export function Clients() {
    return (
        <Suspense fallback="...is loading">
            <Page/>
        </Suspense>
    );
}
