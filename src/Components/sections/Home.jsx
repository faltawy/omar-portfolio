import React from 'react';
import { tagList } from '../utils';

function Tag({ label }) {
  return (
    <span className='whitespace-nowrap bg-Quick-Silver text-White py-1 px-1.5'>{label}</span>
  )
}


function Home() {
  return (
    <section className='flex animate-in fade-in-0 duration-[1s] delay-[1s]  items-center justify-center py-5 px-4'>
      <div className='flex flex-col items-center h-full container'>

        <div className='overflow-hidden rounded-lg flex-shrink-0 shadow-lg w-[300px] h-[300px] bg-Gray-Web'>
          <img src="https://i.picsum.photos/id/485/1500/900.jpg?hmac=5RklFKLUAiDzcZFjA78S0VWxSzBXf5y-dMKXwTWfXMw" className='w-full h-full object-cover object-center' alt="" />
        </div>
        <div className="flex flex-col items-start gap-3   justify-between">
          <div className="w-full   text-start text-Granite-Gray mb-4 whitespace-nowrap 
          ">
            <h1 className='uppercase font-bold text-[45px]
            relative w-fit after:rounded-lg tracking-in-contract
            after:w-full after:h-1 after:bg-Granite-Gray after:absolute after:bottom-0 after:right-0
            '>Omar Tag</h1>
          </div>
          <div className="font-semibold text-lg text-Gray-Web whitespace-pre-line mb-5">
            <p>
              Creative Photographer based in New Yorall over Europe to capture photos.
              Creative Photographer based in New Yorall over Europe to capture photos.
            </p>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default Home