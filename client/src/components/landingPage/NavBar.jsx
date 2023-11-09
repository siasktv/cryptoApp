export default function NavBar () {
    return (
        <nav className="flex justify-between items-center p-8">
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