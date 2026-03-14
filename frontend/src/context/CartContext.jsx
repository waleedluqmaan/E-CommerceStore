import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetchCart();
        } else {
            setCart({ items: [] });
        }
    }, [user]);

    const fetchCart = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/cart', {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            if (res.ok) {
                const data = await res.json();
                setCart(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const addToCart = async (productId) => {
        try {
            const res = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ productId })
            });
            if (res.ok) {
                const data = await res.json();
                setCart(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const clearCart = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/cart', {
                method: 'DELETE',
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            if (res.ok) {
                setCart({ items: [] });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const cartTotal = cart.items ? cart.items.reduce((total, item) => total + (item.product?.price || 0) * item.quantity, 0) : 0;
    const cartCount = cart.items ? cart.items.reduce((count, item) => count + item.quantity, 0) : 0;

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, cartTotal, cartCount, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};
