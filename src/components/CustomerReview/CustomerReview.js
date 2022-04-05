import React from 'react';
import './CustomerReview.css';

const CustomerReview = (props) => {
    const { name, img, rating, comments } = props.product;
    return (
        <div className='customer-review'>
            <div className='review-info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>Name: {name}</h3>
                    <p><b>Comment:</b> {comments}</p>
                    <p><b>Rating: </b>{rating}</p>
                </div>

            </div>
        </div>
    );
};

export default CustomerReview;