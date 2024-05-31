"use client"

import Image from "next/image";
import { Card } from "./components/cards/card";
import { CardBanner } from "./components/cards/cardBanner";
import { ButtonCatalog } from "./components/button/catalog";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarProps } from "./components/cards/card";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import {v4 as uuidv4} from 'uuid'

export default function Home() {
  
  const [carsList,setCarsList] = useState<CarProps[]>([])
  
  useEffect(()=>{
    const fetch_data = async ()=>{
      try{
        const response = await axios.get('http://localhost:5000/car')
        //console.log(response.data)
        setCarsList(response.data)

      }catch(err){
        console.error('Error Fetch data: ', err)
      }
      
    }
    fetch_data()
  },[])
  return (
    <main className="scroll-smooth"> 
      <div className="ml-auto max-w-80percent">
        <Image src={'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJici9hc3NldHMvaW1hZ2VzL2hvbWUvd2VicC9tYWluLWhlcm8tcHJvbW8tbWQud2VicCIsImVkaXRzIjp7fX0='}
          width={1280} height={500} alt='banner'
        ></Image>
      </div>
      
      <section className=" m-auto max-w-80percent flex flex-col justify-center" >  
          <h1 className="text-black text-center mt-10 text-5xl font-extrabold" id="car">Escolha seu proximo carro</h1>
          <div className="flex flex-row gap-10">
           
            <Swiper
              className="w-full my-20"
              slidesPerView={4}
              spaceBetween={20}
              
            >
              {
                carsList.map
                (
                  (item)=>{
                    return(
                      <SwiperSlide className="" key={uuidv4()}>
                        <Card 
                          key={item.id}
                          name={item.name}
                          model={item.model}
                          brand={item.brand}
                          price={item.price}
                          image_url={item.image_url}
                        />
                      </SwiperSlide>
                      
                    )
                  }
                )
              } 
            </Swiper>            
            
          </div> 

          <h2 className="text-black text-center text-4xl font-extrabold mb-14">3 razões para comprar um carro na Kavak</h2>  

          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <CardBanner 
                title="Carros com certificados de qualidade"
                url="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJici9hc3NldHMvaW1hZ2VzL2hvbWUvd2VicC9zbGlkZXItMS1hbGwud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzY0LCJoZWlnaHQiOjI0M319fQ=="
                content="Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. "
              />
              <CardBanner 
                title="Recondicionamento feito por especialistas"
                url="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJici9hc3NldHMvaW1hZ2VzL2hvbWUvd2VicC9zbGlkZXItMi1hbGwtb2xkLXYyLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjM2NCwiaGVpZ2h0IjoyNDN9fX0="
                content="Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. "
              />
              <CardBanner 
                title="Devolução facilitada: 7 dias ou 300km"
                url="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJici9hc3NldHMvaW1hZ2VzL2hvbWUvd2VicC9zbGlkZXItNC1hbGwud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzY0LCJoZWlnaHQiOjI0M319fQ=="
                content="Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. "
              />
            </div>
            
            <ButtonCatalog/>
          </div>
          
      </section>
    </main>
  )
    
}
