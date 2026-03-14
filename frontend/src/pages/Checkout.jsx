import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Truck } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // In a real app we'd save the order to DB here.
        setSuccess(true);
        clearCart();
        setTimeout(() => {
            navigate('/products');
        }, 4000);
    };

    if (success) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-500/10 blur-[120px] pointer-events-none" />
                <div className="glass-panel max-w-md w-full p-10 text-center relative z-10 animate-fade-in-up">
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-2">Order Confirmed!</h2>
                    <p className="text-gray-400 mb-8">Thank you for shopping at LuxeStore. Your order is on its way.</p>
                    <p className="text-sm text-gray-500 mb-6">Payment Method: Cash on Delivery</p>
                    <div className="animate-pulse flex items-center justify-center gap-2 text-primary font-medium">
                        <Truck className="w-5 h-5" /> Redirecting to products...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-extrabold text-white mb-8">Checkout</h1>

                {!cart?.items || cart.items.length === 0 ? (
                    <div className="glass-panel p-8 text-center">
                        <p className="text-gray-400 mb-4">You have no items to checkout.</p>
                        <Link to="/products" className="text-primary hover:underline">Go back to products</Link>
                    </div>
                ) : (
                    <div className="glass-panel overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Order Details</h3>

                            <div className="space-y-4 mb-8">
                                {cart.items.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-md overflow-hidden bg-darker">
                                                <img src={item.product?.image} alt={item.product?.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{item.product?.title}</p>
                                                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-white font-medium">${((item.product?.price || 0) * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-6 pb-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-300 font-medium">Payment Method:</span>
                                    <span className="bg-white/10 text-white px-4 py-2 rounded-lg font-mono text-sm border border-white/5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400"></span> Cash on Delivery
                                    </span>
                                </div>

                                <div className="flex justify-between items-end">
                                    <span className="text-gray-400">Amount to pay</span>
                                    <div className="text-right">
                                        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                            ${cartTotal.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                className="btn-primary"
                            >
                                Confirm Order & Pay on Delivery
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Checkout;
