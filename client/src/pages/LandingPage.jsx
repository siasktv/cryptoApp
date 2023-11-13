import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/landingPage/NavBar"
import Hero from "../components/landingPage/Hero"
import MarketTrendCards from "../components/landingPage/MarketTrendCards"
import Features from "../components/landingPage/Features"
import CryptoChart from "../components/CryptoChart"
import Footer from "../components/landingPage/Footer"
import { featuresData } from "../components/landingPage/FeaturesData"


export default function LandingPage () {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en")
        setData(response.data)
    }

    console.log(data)

    useEffect(() => {
        getData()
    }, [])

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
            {
                data && data.map((item) => {
                    return (
                        <MarketTrendCards 
                        key={item.id}
                        data={item}
                        />
                    )
                })
            }
            </div>
            </div>
            <div className="mt-56">
                <div className="flex flex-col mb-4 justify-center items-center gap-4">
                <h2 className="font-bold text-[36px] text-[#0D3E36]">CryptoCap Amazing Faetures</h2>
                <p className="text-[#4D625F]">Explore sensational features to prepare your best investment in cryptocurrency</p>
                </div>
            
            <div className="flex gap-8">
                {
                    featuresData.map((item) => {
                        return (
                            <Features 
                            key={item.id}
                            data={item}
                            />
                        )
                    })
                }
                
            </div>
            </div>
            <div className="mt-56">
            <h2 className="font-bold text-[36px] text-[#0D3E36]">Market Update</h2>
            <CryptoChart/>
            </div>
            
        </div>
        <div className="mt-56 px-[90px] border-t border-[#EAEAEA] py-16 bg-gray-50">
                <Footer />
            </div>
        </>
       
    )
}