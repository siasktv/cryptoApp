import { useState, useEffect } from 'react';

export default function NavBar () {
    const [navBarActive, setNavBarActive] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setNavBarActive(isScrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);    
    }
    , []);

    return (
        <nav className={`flex px-20 py-6 justify-between items-center sticky top-0 z-50 backdrop-filter backdrop-blur-lg ${navBarActive ? 'bg-white bg-opacity-30' : ""}`}>
            <p className="text-black font-bold text-lg">Crypto <span className="text-green-700 text-lg font-bold">App</span></p>
            <div className="">
                <ul className="flex items-center gap-24">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">Login</button>
            </div>
        </nav>
    )
}