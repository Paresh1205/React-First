import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image from '../images/img-9.jpg';
import image2 from '../images/img-2.jpg';
import image3 from '../images/img-4.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout the Epic Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>
                        <CardItem
                            src={image}
                            label='Adventure'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            path='/services' />
                        <CardItem
                            src={image2}
                            label='Luxury'
                            text='Travel through the Island of Bali in private cruise'
                            path='/services' />
                    </ul>
                    
                    <ul className='cards__items'>
                        <CardItem
                            src={image}
                            label='Adventure'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            path='/services' />
                        <CardItem
                            src={image2}
                            label='Luxury'
                            text='Travel through the Island of Bali in private cruise'
                            path='/services' />
                        <CardItem
                            src={image3}
                            label='Adventure'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
