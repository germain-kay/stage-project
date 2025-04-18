import {Suspense, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from "@phosphor-icons/react";

import ProductsEditModal from '../components/modals/productsedit';
import ProductsCreateModal from '../components/modals/productsedit';
import {getProducts} from '../api/products';

function Page() {
    const {t} = useTranslation();
    const [openProductsEditModal, setOpenProductsEditModal] = useState(false);
    const [openProductsCreateModal, setOpenProductsCreateModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    function handleEditClick(product) {
        setSelectedProduct(product);
        setOpenProductsEditModal(true); 
    }

    // function handleDeleteClick(product) {
    //     setSelectedProduct(null);
    //     setOpenProductsEditModal(false);
    // }

    function addProduct(newProduct) {
        setProducts([...products, { ...newProduct, id: Date.now() }]); // Ajout avec un ID temporaire
    }

    function updateProduct(updatedProduct) {
        setProducts(products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        ));
    }

    // Création d'un produit
    // const createNewProduct = async (NewProduct) => {
    //     try {
    //         const createdProduct = await createproduct(NewProduct);
    //         setProducts([...products, createdProduct]);
    //     } catch (error) {
    //         console.error('Failed to create product:', error);
    //     }
    // };
    //
    // Supprestion d'un produit
    // const deleteProductById = async (id) => {
    //     try {
    //         await deleteProduct(id);
    //         setProducts(products.filter(product => product.id !== id));
    //     } catch (error) {
    //         console.error('Failed to delete product:', error);
    //     }
    // };

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {t('header-title.products')}
                    </h1>
                </div>
            </header>
            <main className="bg-white shadow">
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button"
                            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">
                        All categories
                    </button>
                    <button type="button"
                            onClick={() => setOpenProductsCreateModal(true)}
                            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">
                        {t('products.addProduct')}
                    </button>
                </div>
                <div className="relative overflow-x-auto px-6 sm:rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Map du produit par id*/}
                        {products.map((product) => (
                            <div key={product.id}
                                 className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src={product.image} alt="product image"/>
                                </a>
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {[...Array(5)].map((_, index) => (
                                                <Star key={index} size={16} weight={"fill"}
                                                      color={index < product.rating ? "rgb(253 224 71)" : "rgb(75 85 99)"}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleEditClick(product)}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            {t('products.editProduct')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {openProductsEditModal &&
                    <ProductsEditModal product={selectedProduct} setOpenProductsEditModal={setOpenProductsEditModal}
                                       updateProduct={updateProduct}/>}
                {openProductsCreateModal && <ProductsCreateModal setOpenProductsCreateModal={setOpenProductsCreateModal} addProduct={addProduct} />}
            </main>
        </div>
    );
}

export function Products() {
    return (
        <Suspense fallback="...is loading">
            <Page/>
        </Suspense>
    );
}