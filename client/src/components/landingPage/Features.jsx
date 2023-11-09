import Logo from "../../assets/feature.png"

export default function Features (){
    return(
        <div className="flex items-center flex-1 p-8 rounded-xl border border-[#EAEAEA] bg-white">
        <div className="flex flex-col items-start gap-6">
        <img className="w-[80px] h-[80px]" src={Logo}/>
        <h2 className="self-stretch text-black font-bold">Manage Portfolio</h2>
        <p className="self-strech ttext-md text-[#808080]">Buy and sell popular digital currencies, keep track of them in the one place.</p>
        </div>
    </div>
    )
}