import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ProductsEditModal({ client, setOpenProductsEditModal, updateProduct }) {
    const { t } = useTranslation();
    const [name, setName] = useState(client.productName);
    const [price, setPrice] = useState(client.price);
    const [rating, setRating] = useState(client.rating);

    function handleSave() {
        const updatedProduct = {
            ...client,
            productName: name,
            price: price,
            rating: rating,
        };
        updateProduct(updatedProduct);
        setOpenProductsEditModal(false);
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <form>
                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true">
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <button className="absolute top-0 right-0 size-16" onClick={() => setOpenProductsEditModal(false)}>X</button>
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                            <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-base font-semibold text-gray-900" id="modal-title">{t('products.editProduct')}</h3>
                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                        {t('products.name')}
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            placeholder={t('products.name')}
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-3">
                                                    <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                                                        {t('products.price')}
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="price"
                                                            name="price"
                                                            type="text"
                                                            value={price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="sm:col-span-4">
                                                    <label htmlFor="rating" className="block text-sm/6 font-medium text-gray-900">
                                                        {t('products.rating')}
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="rating"
                                                            name="rating"
                                                            type="number"
                                                            max={5}
                                                            min={0}
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
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
                                        {t('products.save')}
                                    </button>
                                    <button type="button" onClick={() => setOpenProductsEditModal(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                        {t('products.cancel')}
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