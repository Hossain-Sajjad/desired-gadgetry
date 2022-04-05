import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import './Review.css'


const Review = (props) => {
    const { name, img, ratings, massage } = props.review;
    return (
        <div className='review'>
            <div className='md:flex items-center'>
                <img className='w-12' src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <StarRatings
                        rating={ratings}
                        numberOfStars={5}
                        starDimension="20px"
                        starRatedColor="#1F1F1F"
                        starSpacing="15px"
                    />
                </div>
            </div>
            <div className='mt-6'>
                <p>{massage}</p>
            </div>
        </div>
    );
};


export default Review;