import NavBar from "../components/landingPage/NavBar"
import Hero from "../components/landingPage/Hero"
import MarketTrendCards from "../components/landingPage/MarketTrendCards"
import Features from "../components/landingPage/Features"
import CryptoChart from "../components/CryptoChart"

// bg-gradient-to-b from-[#FEE6F7] to-white

export default function LandingPage () {
    return (
        <>
          <NavBar />
         <div className="w-full px-20 py-8 min-h-screen">
             <div className="blob w-[800px] h-[800px] rounded-[999px] absolute top-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
             <div className="blob w-[1000px] h-[1000px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
             <div className="blob w-[600px] h-[600px] rounded-[999px] absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100"></div>
             <div className="blob w-[300px] h-[300px] rounded-[999px] absolute bottom-[-10px] left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
          
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
            <div className="mt-56">
            <CryptoChart/>
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
        </>
       
    )
}