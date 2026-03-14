import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const HomeNavbar = () => {
    return (
        <nav className="w-full absolute top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <ShoppingBag className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            LuxeStore
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/signin" className="text-gray-300 hover:text-white transition font-medium">
                            Sign In
                        </Link>
                        <Link to="/signup" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-primary/30">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;
