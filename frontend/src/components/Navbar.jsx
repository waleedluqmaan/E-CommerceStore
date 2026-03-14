import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, LogOut, ShoppingCart } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { logout, user } = useContext(AuthContext);
    const { cartCount } = useContext(CartContext);

    return (
        <nav className="w-full bg-darker/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/products" className="flex-shrink-0 flex items-center gap-2">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold text-white">LuxeStore</span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <span className="text-sm text-gray-400 hidden sm:block">Welcome, <span className="text-white font-medium">{user?.name}</span></span>

                        <Link to="/cart" className="relative text-gray-300 hover:text-white transition">
                            <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button onClick={logout} className="text-gray-300 hover:text-red-400 transition flex items-center gap-2 text-sm font-medium bg-red-500/10 px-3 py-1.5 rounded-lg">
                            <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
