export default function NavBar () {
    return (
        <nav className="flex">
            <p className="color-black">Crypto <span>App</span></p>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Market Trend</li>
                    <li>Market Update</li>
                    <li>Amazing Features</li>
                </ul>
            </div>
            <button>Login</button>
        </nav>
    )
}