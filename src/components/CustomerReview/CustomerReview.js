import React from 'react';
import './CustomerReview.css';

const CustomerReview = (props) => {
    const { name, img, rating, comments } = props.product;
    return (
        <div>
            <div className='review-info'>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <p>Comment: {comments}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default CustomerReview;