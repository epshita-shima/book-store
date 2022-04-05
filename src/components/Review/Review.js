import React from 'react';
import useProducts from '../../hook/useProducts';
import ReviewData from '../ReviewData/ReviewData';

const Review = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            {
                products.map(product => <ReviewData
                    key={product.id}
                    product={product}
                ></ReviewData>)
            }
        </div>
    );
};

export default Review;