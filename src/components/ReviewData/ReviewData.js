import React from 'react';

const ReviewData = (props) => {
    const { name, img, comments, rating } = props.product;
    return (
        <div className='customer-review'>
            <div className='review-info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>Name:{name}</h3>
                    <p><b>Comment:</b> {comments}</p>
                    <p><b>Rating:</b> {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewData;