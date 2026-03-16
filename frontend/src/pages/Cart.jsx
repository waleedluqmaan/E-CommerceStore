import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Trash2, ShoppingCart } from 'lucide-react';

const Cart = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-extrabold text-white">Your Cart</h1>
                    {cart?.items?.length > 0 && (
                        <button onClick={clearCart} className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 transition">
                            <Trash2 className="w-4 h-4" /> Clear All
                        </button>
                    )}
                </div>

                {!cart?.items || cart.items.length === 0 ? (
                    <div className="glass-panel p-12 text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-sky-400/10 rounded-full flex items-center justify-center mb-6 border border-sky-300/15">
                            <ShoppingCart className="w-10 h-10 text-sky-200/40" />
                        </div>
                        <h2 className="text-xl font-medium text-white mb-2">Your cart is empty</h2>
                        <p className="text-sky-200/50 mb-8">Looks like you haven't added anything yet.</p>
                        <Link to="/products" className="btn-primary inline-flex max-w-[200px]">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            {cart.items.map((item) => (
                                <div key={item._id} className="glass-panel p-4 flex gap-4 items-center">
                                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-sky-900/10 flex-shrink-0">
                                        <img
                                            src={item.product?.image || 'https://via.placeholder.com/150'}
                                            alt={item.product?.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">{item.product?.title}</h3>
                                        <p className="text-sm text-sky-200/50 mb-2">Qty: <span className="text-white font-medium">{item.quantity}</span></p>
                                        <p className="text-primary font-bold">${item.product?.price.toFixed(2)}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-white">${((item.product?.price || 0) * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="md:col-span-1">
                            <div className="glass-panel p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-sky-300/10 pb-4">Order Summary</h3>
                                <div className="flex justify-between mb-4 text-sky-200/60">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-4 text-sky-200/60">
                                    <span>Shipping</span>
                                    <span className="text-emerald-400">Free</span>
                                </div>
                                <div className="border-t border-sky-300/10 my-4 pt-4 flex justify-between items-center">
                                    <span className="text-lg font-bold text-white">Total</span>
                                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                                        ${cartTotal.toFixed(2)}
                                    </span>
                                </div>
                                <Link to="/checkout" className="btn-primary mt-6 group flex items-center justify-center gap-2">
                                    Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Cart;
