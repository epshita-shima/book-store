import React from 'react';
import useProducts from '../../hook/useProducts';
import ReviewData from '../ReviewData/ReviewData';

const Review = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>What our Customer Say!!</h2>
            <div className='customer'>
                {
                    products.map(product => <ReviewData
                        key={product.id}
                        product={product}
                    ></ReviewData>)
                }
            </div>
        </div>
    );
};

export default Review;