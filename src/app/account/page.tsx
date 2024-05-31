'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from "react-hook-form"
import { z } from 'zod'
import Image from 'next/image';

const createUserBodySchema= z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role:z.enum(['customer', 'admin'])
})

type CreateUserBodySchemaType = z.infer<typeof createUserBodySchema>

export default function Account(){

    const {register, handleSubmit} = useForm<CreateUserBodySchemaType>({
        resolver: zodResolver(createUserBodySchema)
    });

    async function handleUserSubmit(data:CreateUserBodySchemaType){
        console.log(data)
        try{
            const response = await axios.post('http://localhost:5000/user',{
                username: data.username,
                email:data.email,
                password: data.password,
                role: data.role
            })
            
            // const { token }:{ token: UUID } = response.data
            // localStorage.setItem('token', token)
            window.location.href='/login'
        }catch(error){
            console.error('Error in fetch login: ', error);
        }
    }

    return (
        <div className='flex gap-10 max-w-80percent m-auto'>
            <Image src='https://www.kavak.com/secure/auth/_next/image?url=https%3A%2F%2Fimages.prd.kavak.io%2Ftr%2Fassets%2Fimages%2Fhome%2Fwebp%2Flogin-hero.webp&w=2048&q=75' alt='' width={694} height={945} />
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(handleUserSubmit)}>
                <p className='text-black font-bold text-4xl'>Crie sua conta</p>
                <input type="text" className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black" placeholder='username' {...register('username', {required:true})}/>
                <input type="email" className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black" placeholder='email'  {...register('email', {required:true})}/>
                <input type="password" className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black" placeholder='password'  {...register('password', {required:true})}/>
                <select className="bg-transparent py-2 px-1 rounded border border-slate-700 text-black"  id="" {...register('role')} >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <button type='submit' className="bg-slate-600 rounded py-1 rounded">Enviar</button>
            </form>
        </div>
    )
}