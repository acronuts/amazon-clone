import React from 'react';
import './index.css';
import Product from '../Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg" alt="" />
                <div className="home__row">
                    <Product
                    id='6235321541' 
                    title='OnePlus 8T Lunar Silver, 5G Unlocked Android Smartphone U.S. Version, 256GB Storage + 12GB RAM, 120Hz Fluid Display, Quad Camera' 
                    image='https://images-na.ssl-images-amazon.com/images/I/71GuLTfMJAL._AC_SL1500_.jpg' 
                    price={699.99} 
                    rating={5} />
                    <Product
                    id='2162423252' 
                    title='Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long Lasting Battery - Silver (US Version)'
                    image='https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SL1024_.jpg'
                    price={159.99}
                    rating={4} />
                </div>
                <div className="home__row">
                    <Product
                    id='525451135' 
                    title='Riedel Curly Decanter'
                    image='https://images-na.ssl-images-amazon.com/images/I/61rMrQzYV-L._AC_SL1500_.jpg'
                    price={174.69}
                    rating={5} />
                    <Product
                    id='912415151' 
                    title='Wine Folly: The Essential Guide to Wine'
                    image='https://images-na.ssl-images-amazon.com/images/I/51S++zq9ydL._SX404_BO1,204,203,200_.jpg'
                    price={7.95}
                    rating={5} />
                    <Product
                    id='222526678' 
                    title='Rabbit Automatic Electric Corkscrew Wine Bottle Opener, One Size, Silver'
                    image='https://images-na.ssl-images-amazon.com/images/I/61o1RRPnjoL._AC_SL1500_.jpg'
                    price={12.99}
                    rating={3} />
                </div>
                <div className="home__row">
                    <Product
                    id='14772341'
                    title='The Mindful Word Inspirational Mountain Poster - 16 x 42 Inches - Canvas Fabric Poster With Inspirational Quote by Lao Tzu (White / Blue)'
                    image='https://images-na.ssl-images-amazon.com/images/I/71lk2fndxUL._AC_SL1500_.jpg'
                    price={49.99}
                    rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
