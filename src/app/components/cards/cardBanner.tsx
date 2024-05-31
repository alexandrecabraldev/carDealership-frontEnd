import Image from "next/image"

interface PropsCardBannertype{
    url:string,
    title:string,
    content:string
}

export function CardBanner(props:PropsCardBannertype){
    return(
        <div className="flex flex-col rounded-lg shadow-xl overflow-hidden">
            
                <Image src={props.url} width={360} height={248} alt=""/>
                <div className="flex flex-col p-2">
                <span className="text-black mb-8 mt-4 text-3xl font-bold">
                    {props.title}
                </span>
                <span className="text-black">
                    {props.content}
                </span>
            </div>
        </div>
    )
}