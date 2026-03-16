import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { PackagePlus } from 'lucide-react';

const Admin = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });
    const [msg, setMsg] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        try {
            const res = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    price: Number(formData.price)
                })
            });
            if (res.ok) {
                setMsg('Product added successfully!');
                setFormData({ title: '', description: '', price: '', image: '' });
            } else {
                setMsg('Failed to add product');
            }
        } catch (err) {
            setMsg('Network error');
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-3xl mx-auto px-4 py-12">
                <div className="glass-panel p-8">
                    <div className="flex items-center gap-3 mb-8 border-b border-sky-300/10 pb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center border border-sky-300/15">
                            <PackagePlus className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                            <p className="text-sky-200/50 text-sm">Add new products to the store database</p>
                        </div>
                    </div>

                    {msg && (
                        <div className={`p-4 rounded-lg mb-6 ${msg.includes('success') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                            {msg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-sky-200/70 mb-1">Product Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input-field" placeholder="e.g. Premium Wireless Headphones" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-sky-200/70 mb-1">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} required className="input-field h-32 resize-none" placeholder="Detailed product description..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-sky-200/70 mb-1">Price ($)</label>
                            <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required className="input-field" placeholder="0.00" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-sky-200/70 mb-1">Image URL</label>
                            <input type="url" name="image" value={formData.image} onChange={handleChange} required className="input-field" placeholder="https://example.com/image.jpg" />
                        </div>
                        <button type="submit" className="btn-primary mt-4 py-4 text-lg">Add Product to Store</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Admin;
