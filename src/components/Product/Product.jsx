import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
const Product = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [sort, setSort] = useState('')
    const [sort_newest, setSortNewest] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(
                    'http://localhost:5000/products'
                );
                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
                // Extract unique categories
                const uniqueBrand = [...new Set(data.map(product => product.brand))];
                setBrands(uniqueBrand);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        getData();
    }, []);

    // Product fetch
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `http://localhost:5000/all-products?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}&brand=${brand}&price=${price}&sort_newest=${sort_newest}`
            )
            setProducts(data)
        }
        getData()
    }, [currentPage, filter, itemsPerPage, search, sort, brand, price, sort_newest])
    console.log(products)
    // page count api fetch
    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(
                `http://localhost:5000/products-count?filter=${filter}&search=${search}&brand=${brand}&price=${price}`
            )

            setCount(data.count)
        }
        getCount()
    }, [filter, search, brand, price])

    console.log(count)
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    //  handle pagination button
    const handlePaginationButton = value => {
        console.log(value)
        setCurrentPage(value)
    }

    // handle reset button
    const handleReset = () => {
        setFilter('')
        setBrand('')
        setSort('')
        setPrice('')
        setSortNewest('')
        setSearch('')
        setSearchText('')
    }

    // Handle search button
    const handleSearch = e => {
        e.preventDefault()

        setSearch(searchText)
    }
    console.log(searchText, search)
    // useEffect(() => {
    //     fetch('http://localhost:5000/allProducts')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, []);
    return (
        <div>
            <h1 className='text-center text-xl lg:text-3xl text-blue-400 font-bold mb-2 '>START YOUR SKINCARE JOURNEY</h1>
            <p className='text-center font-bold'>Skincare is an evolving personal journey and we're here <br />
                to guide you along the way.</p>


            <div className='flex overflow-x-auto  gap-4 mt-5'>
                {/* Search */}
                <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            name='search'
                            placeholder='Find Your Product'
                            aria-label='Find Your Product'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-pink-400 rounded-md hover:bg-blue-500 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>

                <div>
                    <select
                        onChange={e => {
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={filter}
                        name='category'
                        id='category'
                        className='border p-4 rounded-lg'
                    >
                        <option value=''>Filter By Category</option>
                        {
                            categories?.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <select
                        onChange={e => {
                            setBrand(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={brand}
                        name='brand_name'
                        id='brand_name'
                        className='border p-4 rounded-lg'
                    >
                        <option value=''>Filter By Brand</option>
                        {
                            brands?.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))
                        }

                    </select>
                </div>

                <div>
                    <select
                        onChange={e => {
                            setPrice(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={price}
                        name='price'
                        id='price'
                        className='border p-4 rounded-lg'
                    >
                        <option value=''>Filter By Price Range</option>
                        <option value='2.99-14.99'>2.99-14.99</option>
                        <option value='15.99-24.99'>15.99-24.99</option>
                        <option value='25.99-35.99'>25.99-35.99</option>
                    </select>
                </div>



                {/* Sort */}
                <div>
                    <select
                        onChange={e => {
                            setSortNewest(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={sort_newest}
                        name='sort_newest'
                        id='sort_newest'
                        className='border p-4 rounded-md'
                    >
                        <option value=''>Sort By Date</option>
                        <option value='dsc'>Newest Product</option>
                    </select>
                </div>

                <div>
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={sort}
                        name='sort'
                        id='sort'
                        className='border p-4 rounded-md'
                    >
                        <option value=''>Sort By Price</option>
                        <option value='dsc'>Price High to Low </option>
                        <option value='asc'>Price Low to High</option>
                    </select>
                </div>

                <button onClick={handleReset} className='btn'>
                    Reset All
                </button>
            </div>




            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>
                {
                    products.map(product => <div className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img className='h-[250px]'
                                src={product.productImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}
                                <div className="badge badge-secondary"><FaStar />{product.ratings}</div></h2>
                            <p>{product.description}</p>
                            <p><span className='font-bold'>Price:</span> <span className='text-blue-400 font-bold'>${product.price}</span></p>
                            <p><span className='font-bold'>Brand:</span> <span className='text-pink-400 font-bold'>{product.brand}</span></p>
                            <p><span className='font-bold'>Category:</span> <span className='text-pink-400 font-bold'>{product.category}</span></p>
                            <p><span className='font-bold'>Date:</span> <span className=''>{product.productDate} {product.productTime}</span></p>


                        </div>
                    </div>)
                }
            </div>


            {/* Pagination Section */}
            <div className='flex justify-center mt-12'>
                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePaginationButton(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-pink-400  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* Numbers */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-blue-400 text-white' : ''
                            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-pink-400  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-pink-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default Product;