import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/cartSlice';
import { fetchProducts, STATUSES } from '../Redux/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }; 

    if (status === STATUSES.LOADING) {
        return (
            <div className='error'>
                Loading
            </div>
        );
    } 

    if (status === STATUSES.ERROR) {
        return <div className='error'>Something went wrong</div>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">Add</button>
                </div>
            ))}
        </div>
    );
};

export default Products;