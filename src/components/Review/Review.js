import React from 'react';

const Review = (props) => {
    const { name, img, ratings, massage } = props.review;
    return (
        <div>
            <div className='md:flex items-center'>
                <img className='w-12' src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Review;