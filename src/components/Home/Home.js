import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='md:flex justify-center'>
                <div className='my-auto'>
                    <h1>Your Desire Device</h1>
                    <h3>Sony Alpha 7</h3>
                    <p>The cameras are renowned for their reliability and quality</p>
                </div>
                <div className='flex justify-end items-center'>
                    <img className='w-2/4' src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/05/Complte-Sony-Camera-Buying-Guide-gear-patrol-ambiance-2.jpg?resize=768:*" alt="" />
                </div>
            </div>
            <div>
                <h3>Consumer Reviews :</h3>
                <div className='reviews-container'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <button className='btn'>Show All</button>
            </div>
        </div>
    );
};

export default Home;