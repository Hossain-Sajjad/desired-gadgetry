import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    const showAllReviews = () => {
        navigate('/reviews');
    }

    return (
        <div>
            <div className='top-container'>
                <div className='heading-container'>
                    <h1>Your Desire Device</h1>
                    <h3>Sony Alpha 7</h3>
                    <p>Sony has some of the best mirrorless camera systems on the market. The cameras are renowned for their reliability and quality</p>
                </div>
                <div className=''>
                    <img className='' src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/05/Complte-Sony-Camera-Buying-Guide-gear-patrol-ambiance-2.jpg?resize=768:*" alt="" />
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
                <button onClick={showAllReviews} className='btn'>Show All</button>
            </div>
        </div>
    );
};

export default Home;