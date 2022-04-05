import React, { } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='home-page'>
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

            <div className='review-half'>
                <h2>Customer review(6)</h2>
                <div className='customer-review-half'>
                    {
                        products.slice(0, 3).map(product => <CustomerReview
                            key={product.id}
                            product={product}
                        ></CustomerReview>)
                    }
                </div>
                <Link to='/review'>
                    <button className='review-btn'>See all comments</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;