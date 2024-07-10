"use client"
import React from 'react'

// import ProccedToBuy from './ProccedToBuy'
import { getCart } from '@/redux/cartSlice';
import { useAppSelector } from '@/lib/hooks/redux';
import ShoppingCart from './ShopingCart';
import ProccedToBuy from './ProceeToBuy';

const Cart = () => {
    const cart = useAppSelector(getCart);
    let totalPrice = 0;
    cart.forEach((item:any) => {
        totalPrice += item.price * item.quantity;
    });
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex w-full justify-between'>
                <ShoppingCart cart={cart} totalPrice={totalPrice}/>
                <ProccedToBuy length={cart.length} totalPrice={totalPrice}/>
            </div>
        </div>
    )
}

export default Cart