import NavBar from "../components/landingPage/NavBar"
import Hero from "../components/landingPage/Hero"
import MarketTrendCards from "../components/landingPage/MarketTrendCards"

export default function LandingPage () {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#FEE6F7] to-white">
            <NavBar />
            <Hero />
            <div className="flex px-20 py-8 gap-8">
            <MarketTrendCards />
            <MarketTrendCards />
            <MarketTrendCards />
            <MarketTrendCards />
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