'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { headers } from 'next/headers';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { z } from 'zod'
import Image from 'next/image';

const carRegisterBodyScema= z.object({
    name: z.string(),
    model: z.string(),
    brand: z.string(),
    price:z.string(),
    url: z.string(),
})

type carRegisterBodyScemaType = z.infer<typeof carRegisterBodyScema>

export default function login(){
    const [token, setToken] = useState<string | null>('')

    const {register, handleSubmit} = useForm<carRegisterBodyScemaType>({
        resolver:zodResolver(carRegisterBodyScema)
    });

    useEffect(()=>{
        const data = localStorage.getItem('token')
        console.log(data)
        setToken(data)
    },[])

    async function handleOnSubmit(data:carRegisterBodyScemaType){
        
        try{
            await axios.post('http://localhost:5000/car',{
                name: data.name,
                model: data.model,
                brand: data.brand,
                price: data.price,
                image_url: data.url
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            window.location.href='/'

        }catch(error){

            if(error instanceof AxiosError)
            console.log('Error on register car: ', error.response?.status)
        }
        
    }

    return (
        <div className='flex gap-10 max-w-80percent m-auto'>
            <Image src='https://www.kavak.com/secure/auth/_next/image?url=https%3A%2F%2Fimages.prd.kavak.io%2Ftr%2Fassets%2Fimages%2Fhome%2Fwebp%2Flogin-hero.webp&w=2048&q=75' alt='' width={694} height={945} />
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(handleOnSubmit)}>
               
                <p className='text-black font-bold text-3xl'>Registre um altomóvel.</p>
                <input id='name' type="text" className="bg-neutral-400 py-2 px-1 text-black bg-transparent rounded border border-slate-700" placeholder='Name'{...register('name', {required:true})}/>
                  
                <input id='model' type="text" className="bg-neutral-400 py-2 px-1 text-black bg-transparent rounded border border-slate-700" placeholder='Model'{...register('model', {required:true})}/>
                
                <input id='brand' type="text" className="bg-neutral-400 py-2 px-1 text-black bg-transparent rounded border border-slate-700" placeholder='Brand' {...register('brand', {required:true})}/>
               
                <input id='price' type="text" className="bg-neutral-400 py-2 px-1 text-black bg-transparent rounded border border-slate-700" placeholder='Price' {...register('price', {required:true})}/>

                <input id='url' type="text" className="bg-neutral-400 py-2 px-1 text-black bg-transparent rounded border border-slate-700" placeholder='Url' {...register('url', {required:true})}/>

                <button type='submit' className="bg-slate-600 rounded py-1">Send</button>
            </form>
        </div>
    )
}