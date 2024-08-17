import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";

const Product = () => {
    const [products, setProducts] = useState([]);
    // const { user } = useContext(AuthContext);
    // console.log(user)
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);
    return (
        <div>
            <h1 className='text-center text-xl lg:text-3xl text-blue-400 font-bold mb-2 '>START YOUR SKINCARE JOURNEY</h1>
            <p className='text-center font-bold'>Skincare is an evolving personal journey and we're here <br />
                to guide you along the way.</p>


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


        </div>
    );
};

export default Product;