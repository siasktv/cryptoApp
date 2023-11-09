export default function Hero (){
    return(
        <div className=" flex flex-col min-h-screen justify-center items-center gap-16">
            <h1 className="text-black font-bold text-3xl">Start and Build Your Crypto Portfolio Here</h1>
            <p className="text-[#4D625F] text-base">Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
            <div>
                <button className="py-4 px-6 rounded-lg bg-green-700 text-white">Get Started</button>
            </div>
        </div>
    )
}