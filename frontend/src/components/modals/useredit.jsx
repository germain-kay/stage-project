import React, {useState} from 'react';
import {Warning} from "@phosphor-icons/react";
import {useTranslation} from "react-i18next";

export default function UserEditModal ({ client, setOpenUserEditModal, updateClient }){
    const {t} = useTranslation();
    const [firstName, setFirstName] = useState(client.firstName);
    const [lastName, setLastName] = useState(client.lastName);
    const [email, setEmail] = useState(client.email);
    const [job, setJob] = useState(client.job);
    const [number, setNumber] = useState(client.number || '');

    function handleSave() {
        const updatedClient = {
            ...client,
            firstName: firstName,
            lastName: lastName,
            email: email,
            job: job,
            number: number
        };
        updateClient(updatedClient);
        setOpenUserEditModal(false);
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <form>
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true">
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <button className="absolute top-0 right-0 size-16" onClick={() => setOpenUserEditModal(false)}>X</button>
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                            <Warning aria-hidden="true" className="size-6 text-red-600" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">{t('modalUser.title')}</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    {t('modalUser.description')}
                                                </p>
                                            </div>
                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">{t('modalUser.firstName')}</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="first-name"
                                                            name="first-name"
                                                            type="text"
                                                            placeholder={t('modalUser.firstName')}
                                                            autoComplete="given-name"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                                        {t('modalUser.lastName')}
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="last-name"
                                                            name="last-name"
                                                            type="text"
                                                            placeholder={t('modalUser.lastName')}
                                                            autoComplete="family-name"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-4">
                                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">{t('modalUser.email')}</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            placeholder={t('modalUser.email')}
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div> <div className="sm:col-span-4">
                                                    <label htmlFor="job" className="block text-sm/6 font-medium text-gray-900">{t('modalUser.jobTitle')}</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="job"
                                                            name="job"
                                                            type="job"
                                                            autoComplete="job"
                                                            placeholder={t('modalUser.jobTitle')}
                                                            value={job}
                                                            onChange={(e) => setJob(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-2 sm:col-start-1">
                                                    <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
                                                        {t('modalUser.phone')}
                                                    </label>
                                                    <div className="mt-3">
                                                        <input
                                                            id="number"
                                                            name="number"
                                                            type="text"
                                                            autoComplete="address-level2"
                                                            placeholder={t('modalUser.phone')}
                                                            value={number}
                                                            onChange={(e) => setNumber(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button" onClick={handleSave} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">
                                        {t('modalUser.save')}
                                    </button>
                                    <button type="button" onClick={() => setOpenUserEditModal(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                        {t('modalUser.cancel')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}