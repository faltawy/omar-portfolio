import React from 'react'
import { socialList } from '../utils'


function SocialCard({ icon, label, link, variant }) {
  return (
    <a href={link} style={{ boxShadow: `0 -4px ${variant} inset` }} className={`w-[150px] transition-all hover:shadow-none h-[130px] contact-shadow rounded-2xl flex flex-col items-center bg-White gap-2 justify-between py-3`} >
      <span className='font-bold'>{label}</span>
      <span style={{ color: variant }}>{React.createElement(icon, { size: 40 })}</span>
    </a>
  )
}


function Heading({ text }) {
  return (
    <div className='font-bold bg-Silver w-fit p-2 rounded text-White'>
      <h1
      >{text}</h1>
    </div>
  )
}

function Input({ props }) {
  return (<input {...props} className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />)
}

function Contact() {
  return (
    <section className='py-5 px-4 animate-in fade-in-40 '>
      <div className="container h-full flex items-start flex-col gap-5">
        <div className="w-full flex items-start flex-col gap-4">
          <Heading text='Social' />
          <div className='grid sm:grid-cols-4 grid-cols-2 justify-center items-center place-items-center gap-4 w-full mx-auto'>
            {
              socialList.map((link) => {
                return <SocialCard {...link} />
              })
            }
          </div>
        </div>
        <div className="form">
          <Heading text='Contact Me' />
          <div class="py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

              <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                <div>
                  <input name="last-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div class="sm:col-span-2">
                  <Input name="email" placeholder='Email*' type='email' />
                </div>
                <div class="sm:col-span-2">
                  <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact