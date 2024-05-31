'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { UUID } from 'crypto';
import { useForm } from "react-hook-form"
import { z } from 'zod'
import Image from 'next/image';

const loginBodySchema= z.object({
    email: z.string().email(),
    password: z.string(), 
})

type loginBodySchemaType = z.infer<typeof loginBodySchema>

export default function login(){

    const {register, handleSubmit} = useForm<loginBodySchemaType>({
        resolver:zodResolver(loginBodySchema)
    });

    async function handleOnSubmit(data:loginBodySchemaType){

        try{
            const response = await axios.post('http://localhost:5000/login',{
                email:data.email,
                password: data.password
            })

            const { token }:{ token: UUID } = response.data
            localStorage.setItem('token', token)
            window.location.href='/'
        }catch(error){
            console.error('Error in fetch login: ', error);
        }
    }

    return (
        <div className='flex gap-10 max-w-80percent m-auto'>
            <Image src='https://www.kavak.com/secure/auth/_next/image?url=https%3A%2F%2Fimages.prd.kavak.io%2Ftr%2Fassets%2Fimages%2Fhome%2Fwebp%2Flogin-hero.webp&w=2048&q=75' alt='' width={694} height={945} />
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(handleOnSubmit)}>
                <p className='text-black font-bold text-2xl'>Continue sua jornada! Faça login ou <a href='/account' className='text-indigo-600 '>Crie sua conta</a> para ter uma experiência personalizada.</p>
                <input type="email" className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black" placeholder='email' {...register('email', {required:true})}/>
                <input type="password" className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black" placeholder='password' {...register('password', {required:true})}/>
                <button type='submit' className="bg-slate-600 rounded py-1 rounded">Enviar</button>
            </form>
        </div>
    )
}