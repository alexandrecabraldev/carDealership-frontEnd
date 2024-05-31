import Image from "next/image"

export interface CarProps{
    id?:string,
    name:string,
    model:string,
    brand:string,
    price:string,
    image_url:string,
}

export function Card(props: CarProps){
    return (
        
        <div className="">
            <Image src={props.image_url} width={310} height={190} alt="" />
            <div className="text-black shadow-xl cursor-pointer rounded-lg">
                <div className="p-2">
                    <span className="font-bold">{props.brand} * </span> <span className="font-bold">{props.name}</span>
                    <p className="">{props.model}</p>
                </div>
                <hr />
                <div className="p-2 flex flex-col">
                    <span className=" text-lg"> Preço à vista </span>
                    <span className="font-bold text-2xl"> R$ {props.price}</span>
                </div>
                <hr />
                <p className="p-2">São Paulo</p>
            </div>
        </div>
        
    )
}