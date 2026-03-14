import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/products', {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                });
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold mb-8 text-white">Our Collection</h1>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="glass-panel h-80 rounded-2xl" />
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-xl">No products available yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product._id} className="glass-panel overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                                <div className="h-48 overflow-hidden bg-white/5 relative">
                                    <img
                                        src={product.image || 'https://via.placeholder.com/300'}
                                        alt={product.title}
                                        className="w-full h-full object-cover origin-center group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 truncate">{product.title}</h3>
                                        <p className="text-sm text-gray-400 line-clamp-2 mb-4">{product.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => addToCart(product._id)}
                                            className="bg-white/10 hover:bg-primary text-white p-2 rounded-lg transition-colors duration-300"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Products;
