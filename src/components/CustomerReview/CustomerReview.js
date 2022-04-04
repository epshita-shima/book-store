import React from 'react';
import './CustomerReview.css';

const CustomerReview = (props) => {
    const { name, img, rating, comments } = props.product;
    return (
        <div>
            <div className='review-info'>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p><b>Comment:</b> {comments}</p>
                <p><b>Rating: </b>{rating}</p>
            </div>
        </div>
    );
};

export default CustomerReview;