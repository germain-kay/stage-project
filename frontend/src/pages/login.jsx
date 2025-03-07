import React, {Suspense} from 'react';
import { useTranslation } from 'react-i18next';
import { TextIndent  } from "@phosphor-icons/react";
import authUser from "../api/auth.js";

function Page() {
    const {t    } = useTranslation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const email = event.target.email.value;
            const password = event.target.password.value;
            const user = await authUser(email, password);
            console.log('Successfully authenticated:', user);
        } catch (error) {
            console.error('Authentication error:', error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    < TextIndent className="bg-black text-white mx-auto h-10 w-auto"/>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        {t('login.title')}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form /*action="/home"*/ onSubmit={handleSubmit} className="space-y-6" encType={"multipart/form-data"} method={"post"}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                {t('login.email')}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    {t('login.password')}
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        {t('login.forgot-pass')}
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {t('login.sign-in')}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export function Login() {
        return (
            <Suspense fallback="...is loading">
                <Page/>
            </Suspense>
        );

}