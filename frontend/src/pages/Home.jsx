import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-darker overflow-hidden">
            <HomeNavbar />

            {/* Background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

            <main className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh]">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-md">
                    <SparkleIcon /> Introducing the future of commerce
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Elevate Your <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                        Shopping Experience
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto mb-10 leading-relaxed">
                    LuxeStore brings you curated premium products with a seamless, lightning-fast checkout. Sign in to explore an exclusive world of modern aesthetics.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <Link to="/signup" className="btn-primary group flex items-center justify-center gap-2 text-lg px-8">
                        Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/signin" className="btn-secondary text-lg px-8">
                        Sign In
                    </Link>
                </div>

                <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
                    <FeatureCard icon={<Zap className="w-8 h-8 text-yellow-400 p-1 block" />} title="Lightning Fast" desc="Built on cutting edge tech for instant loads." />
                    <FeatureCard icon={<Shield className="w-8 h-8 text-green-400 p-1 block" />} title="Secure Checkout" desc="Safe and reliable cash-on-delivery system." />
                    <FeatureCard icon={<Star className="w-8 h-8 text-primary p-1 block" />} title="Premium Quality" desc="Only the best products make it to our store." />
                </div>
            </main>
        </div>
    );
};

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-panel p-6 text-left hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    );
}

function SparkleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );
}

export default Home;
