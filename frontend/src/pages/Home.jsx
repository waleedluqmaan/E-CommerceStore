import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-darker overflow-hidden">
            <HomeNavbar />

            {/* Background gradients - sky blue liquid glass */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />
            <div className="absolute top-[30%] right-[20%] w-[25%] h-[25%] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

            <main className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh]">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-300/15 text-sm text-sky-200 mb-8 backdrop-blur-md">
                    <SparkleIcon /> Introducing the future of commerce
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Elevate Your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-primary to-cyan-400">
                        Shopping Experience
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl text-xl text-sky-200/60 mx-auto mb-10 leading-relaxed">
                    This Ecommerce Website brings you curated premium products with a seamless, lightning-fast checkout. Sign in to explore an exclusive world of modern aesthetics.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    {/* Buttons moved to top right */}
                </div>

                <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
                    <FeatureCard icon={<Zap className="w-8 h-8 text-yellow-400 p-1 block" />} title="Lightning Fast" desc="Built on cutting edge tech for instant loads." />
                    <FeatureCard icon={<Shield className="w-8 h-8 text-emerald-400 p-1 block" />} title="Secure Checkout" desc="Safe and reliable cash-on-delivery system." />
                    <FeatureCard icon={<Star className="w-8 h-8 text-primary p-1 block" />} title="Premium Quality" desc="Only the best products make it to our store." />
                </div>

                {/* Featured Products Showcase */}
                <div className="mt-32 w-full max-w-6xl mx-auto z-20 relative">
                    <div className="flex justify-between items-end mb-12">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Trending Devices</h2>
                            <p className="text-sky-200/50 text-lg">Top picks in phones, laptops, and tablets.</p>
                        </div>
                        <Link to="/products" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors font-semibold">
                            View All <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="glass-panel p-2 rounded-3xl group overflow-hidden hover:border-primary/40 transition-colors duration-500">
                            <div className="relative h-64 rounded-2xl overflow-hidden bg-darker mb-6">
                                <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop" alt="iPhone 15 Pro Max" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                <div className="absolute top-4 right-4 bg-sky-400/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-sky-100 border border-sky-300/20">Phone</div>
                            </div>
                            <div className="px-4 pb-6 text-left">
                                <h3 className="text-xl font-bold text-white mb-2">iPhone 15 Pro Max</h3>
                                <p className="text-sky-200/50 text-sm mb-4 line-clamp-2">The latest flagship smartphone with an A17 Pro chip and titanium design.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary">$1199.99</span>
                                    <Link to="/products" className="bg-sky-400/10 hover:bg-primary text-white p-2 rounded-xl transition-colors duration-300 border border-sky-300/15">
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Laptop */}
                        <div className="glass-panel p-2 rounded-3xl group overflow-hidden hover:border-primary/40 transition-colors duration-500 md:-translate-y-4">
                            <div className="relative h-64 rounded-2xl overflow-hidden bg-darker mb-6">
                                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" alt="MacBook Pro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                <div className="absolute top-4 right-4 bg-sky-400/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-sky-100 border border-sky-300/20">Laptop</div>
                            </div>
                            <div className="px-4 pb-6 text-left">
                                <h3 className="text-xl font-bold text-white mb-2">MacBook Pro 16"</h3>
                                <p className="text-sky-200/50 text-sm mb-4 line-clamp-2">Supercharged by M3 Max. The ultimate pro laptop for extreme workflows.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary">$2499.00</span>
                                    <Link to="/products" className="bg-sky-400/10 hover:bg-primary text-white p-2 rounded-xl transition-colors duration-300 border border-sky-300/15">
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Tablet */}
                        <div className="glass-panel p-2 rounded-3xl group overflow-hidden hover:border-primary/40 transition-colors duration-500">
                            <div className="relative h-64 rounded-2xl overflow-hidden bg-darker mb-6">
                                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop" alt="iPad Pro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                <div className="absolute top-4 right-4 bg-sky-400/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-sky-100 border border-sky-300/20">Tablet</div>
                            </div>
                            <div className="px-4 pb-6 text-left">
                                <h3 className="text-xl font-bold text-white mb-2">iPad Pro 12.9"</h3>
                                <p className="text-sky-200/50 text-sm mb-4 line-clamp-2">The ultimate professional tablet with a breathtaking Liquid Retina XDR display.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary">$1099.00</span>
                                    <Link to="/products" className="bg-sky-400/10 hover:bg-primary text-white p-2 rounded-xl transition-colors duration-300 border border-sky-300/15">
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 md:hidden text-center">
                        <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-semibold">
                            View All Products <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-panel p-6 text-left hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-sky-400/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-sky-300/15">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-sky-200/50 text-sm">{desc}</p>
        </div>
    );
}

function SparkleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-300">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}

export default Home;
