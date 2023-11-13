
export default function Features ({ data }){
    return(
        <div className="flex items-center flex-1 p-8 rounded-xl border border-[#EAEAEA] bg-white">
        <div className="flex flex-col items-start gap-6">
        <img className="w-[80px] h-[80px]" src={data.image}/>
        <h2 className="self-stretch text-black font-bold">{data.title}</h2>
        <p className="self-strech ttext-md text-[#808080]">{data.description}</p>
        </div>
    </div>
    )
}