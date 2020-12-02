import React, { useState } from 'react';
import './index.css';
import { useStateValue } from '../../StateProvider';
// import { Modal } from '../Modal/'

function Product({ id, title, image, price, rating }) {
    // const [showModal, setShowModal] = useState(false);
    const [{ basket }, dispatch] = useStateValue();

    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // };

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">  
            {/* inside div ^^--> onClick={openModal}  */}
            {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>

            </div>
            <img src={image} alt="deals" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
