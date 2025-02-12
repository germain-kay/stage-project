import React, {Suspense, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from "@phosphor-icons/react";

import { PRODUITS_LIST } from "../utils/samples.js";

function Page() {
    const {t} = useTranslation();
    const [products] = useState(PRODUITS_LIST);

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
                        {t('products.header')}
                    </h1>
                </div>
            </header>

            <main className="bg-white shadow">
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">{t('products.title')}</h2>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {/*Boucle : Liste Produits*/}
                            {products.map((product) => (
                                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-8 rounded-t-lg"
                                             src={product.image}
                                             alt="product image"/>
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.notation}</span>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                            <a href="#"
                                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t('products.cart')}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src="/images/products/airpods-4.png"
                                         alt="product image"/>
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple
                                            AirPods 4 with Active Noise Cancellation</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(75 85 99)"/>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$179</span>
                                        <a href="#"
                                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src="/images/products/ipadpro129.png"
                                         alt="product image"/>
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple
                                            Ipad Pro 12.9, Aluminium Case</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(75 85 99)"/>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$899</span>
                                        <a href="#"
                                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src="/images/products/mbp16-spaceblack.png"
                                         alt="product image"/>
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple
                                            Macbook Pro 16, SpaceBlack</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(253 224 71)"/>
                                            <Star size={16} weight={"fill"} color="rgb(75 85 99)"/>
                                        </div>
                                        <span
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                        <a href="#"
                                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </main>
        </div>
    );
}

export function Produits() {
    return (
        <Suspense fallback="...is loading">
            <Page/>
        </Suspense>
    );
}
