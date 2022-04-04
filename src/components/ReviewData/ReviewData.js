import React from 'react';

const ReviewData = (props) => {
    console.log(props);
    const { name, img, comments, rating } = props.product;
    return (
        <div>
            <div className='review-info'>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <p><b>Comment:</b> {comments}</p>
                <p><b>Rating:</b> {rating}</p>
            </div>
        </div>
    );
};

export default ReviewData;