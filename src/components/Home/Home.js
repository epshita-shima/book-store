import React, { } from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-heading'>
                <div className='home-info'>
                    <h2 className='home-title'>Welcome to BookStore!</h2>
                    <p> Bookshop is an online bookstore with a mission to financially support local, independent bookstores.
                        We believe that bookstores are essential to a healthy culture. They are where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They are also anchors for our downtowns and communities. </p>
                </div>
                <div className='home-img'>
                    <img src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg" alt="" />
                </div>
            </div>

            <div className='customer-review'>
                <h2>Customer review</h2>

            </div>
        </div>
    );
};

export default Home;