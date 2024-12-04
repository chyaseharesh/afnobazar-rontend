/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Microsoft Xbox Series X 1TB Gaming Console",
            price: "$499",
            discount: "Up to 10% off",
            rating: 4.8,
            reviews: "4,263",
            tags: ["Best Seller", "Best Price"],
            image: "https://i5.walmartimages.com/asr/6b6410f7-12b5-4dbc-be70-9ea833ea465b.237643219d16fe321c91d95964054c67.jpeg",
        },
        {
            id: 2,
            name: "Sony PlayStation 5",
            price: "$549",
            discount: "Up to 15% off",
            rating: 4.9,
            reviews: "5,123",
            tags: ["Top Choice", "Best Graphics"],
            image: "https://images-cdn.ubuy.qa/64fbc574ffe79c7b2a72d18a-sony-playstation-5-video-game-console.jpg"
        },
        {
            id: 3,
            name: "Nintendo Switch OLED",
            price: "$349",
            discount: "Up to 5% off",
            rating: 4.7,
            reviews: "3,456",
            tags: ["Portable Gaming", "Family Friendly"],
            image: "https://img.myshopline.com/image/store/1705286183817/oled-neon-1.jpg?w=500&h=500"
        },
        {
            id: 4,
            name: "Valve Steam Deck",
            price: "$399",
            discount: "No Discount",
            rating: 4.5,
            reviews: "2,678",
            tags: ["Portable Gaming", "Exclusive Games"],
            image: "https://i5.walmartimages.com/seo/Valve-Steam-Deck-256gb_1d1604ef-20c1-40c9-8b4f-2b7c87e0156a.f4b8aa069a87d6d3a0e3bf8cd1157a46.jpeg"
        },
    ];
    return (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

                {
                    products.map((product) => (
                        <div key={product.id} className="flex flex-col justify-between h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="h-40 w-full">
                                <a href="#">
                                    <img className="mx-auto h-full" src={product.image} alt={product.name} />
                                </a>
                            </div>

                            <div className="flex flex-col flex-grow pt-6">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                        {product.discount}
                                    </span>

                                    <div className="flex items-center justify-end gap-1">
                                        <button
                                            type="button"
                                            data-tooltip-target="tooltip-quick-look-5"
                                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <span className="sr-only">Quick look</span>
                                            <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                />
                                                <path
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <a href="#" className="mb-2 font-semibold leading-tight text-gray-900">
                                    {product.name}
                                </a>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex items-center">
                                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>

                                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>

                                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>

                                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>

                                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>
                                    </div>

                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.reviews})</p>
                                </div>

                                <ul className="mt-2 flex items-center gap-4">
                                    {
                                        product.tags.map((tag, index) => (
                                            <li key={index} className="flex items-center gap-2">
                                                <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                    />
                                                </svg>
                                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{tag}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mt-auto">
                                    {/* Price and Add to Cart Section */}
                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <p className="text-lg font-extrabold leading-tight text-gray-900">
                                            {product.price}
                                        </p>

                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-lg bg-primary px-5 py-1.5 text-sm font-medium text-white"
                                        >
                                            <svg
                                                className="-ms-2 me-2 h-5 w-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                                />
                                            </svg>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>



            <div className="w-full text-center">
                <button type="button" className="rounded-lg border-2 border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white">Show more</button>
            </div>
        </div>
    )
}

export default ProductList