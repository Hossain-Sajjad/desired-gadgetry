import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, ratings, massage } = props.review;
    return (
        <div className='review'>
            <div className='md:flex items-center'>
                <img className='w-12' src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <small>{ratings}</small>
                </div>
            </div>
            <div>
                <p>{massage}</p>
            </div>
        </div>
    );
};

export default Review;