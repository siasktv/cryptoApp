import NavBar from "../components/landingPage/NavBar"
import Hero from "../components/landingPage/Hero"
import MarketTrendCards from "../components/landingPage/MarketTrendCards"
import Features from "../components/landingPage/Features"

export default function LandingPage () {
    return (
        <div className="w-full px-20 py-8 min-h-screen bg-gradient-to-b from-[#FEE6F7] to-white">
            <NavBar />
            <Hero />
            <div className="">
            <h2 className="mb-4 font-semibold">Market Trend</h2>
            <div className="flex gap-8">
            <MarketTrendCards />
            <MarketTrendCards />
            <MarketTrendCards />
            <MarketTrendCards />
            </div>
            
            </div>
            <div className="mt-56">
                <div className="flex flex-col mb-4 justify-center items-center gap-4">
                <h2 className="font-bold text-[36px] text-[#0D3E36]">CryptoCap Amazing Faetures</h2>
                <p className="text-[#4D625F]">Explore sensational features to prepare your best investment in cryptocurrency</p>
                </div>
            
            <div className="flex gap-8">
                <Features />
                <Features />
                <Features />
                <Features />
            </div>
            </div>
            
            {/* navbar */}
            {/* hero */}
            {/* marketTrend */}
            {/* amazingFeatures */}
            {/* marketUpdate */}
            {/* footer */}
            {/* <h1 className="text-3xl font-bold text-red-600">
      Hello world!
    </h1> */}
        </div>
    )
}