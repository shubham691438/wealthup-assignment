import React from 'react'
import Image from 'next/image';
import mobileImg from '../../public/mobile-img.png'
import icons from '../../public/icons.png'

export default function uiDesign() {
  return (
    <div className="relative min-h-screen mt-[60px]">

      <section className='flex flex-col items-center text-center'>
        <p className='font-[600] text-4xl md:text-5xl lg:text-6xl font-semibold leading-8 md:leading-10 lg:leading-12 '>
          Check your financial health
        </p>

        <div className='relative top-[20px] font-[275] text-base md:text-lg lg:text-2xl leading-6 md:leading-8 lg:leading-10 '>
          <p >Use WeathoMeter to get a free report</p>
          <p >card for your finances- within minutes</p>
        </div>

        <button class=" relative top-[40px] bg-[#FB7306] hover:bg-[#E26805] text-white font-bold py-2 px-4 rounded-full shadow-[1px_1px_1px_1px_#074553]">
          Get Started
        </button>
      </section>
          
      <section className='mt-20 flex justify-center'>
          <div className='mt-[180px]'>
            <ul class="space-y-4 text-left">
              <li class="flex items-center space-x-3 rtl:space-x-reverse relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" class="fill-none stroke-current text-white stroke-2" />
                  <path d="M7 13l3 3 7-7" class="stroke-current text-white" />
                </svg>
                <span class="relative">
                  Expected Retirement Age
                  <span class="absolute top-8 bottom-0 left-0 w-full h-0.5 bg-white"></span>
                </span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" class="fill-none stroke-current text-white stroke-2" />
                  <path d="M7 13l3 3 7-7" class="stroke-current text-white" />
                </svg>
                <span class="relative">
                  Identify Mistakes
                  <span class="absolute top-8 bottom-0 left-0 w-full h-0.5 bg-white"></span>
                </span>
              </li>
            </ul>
          </div>
           
          <div className='ml-[50px]'>
            <Image 
            src={mobileImg}
            className='w-[525px] h-[515px]'
            />
          </div>

          <div className='ml-[-100px] mt-[180px]'>
            <ul class="space-y-4 text-left">
              <li class="flex items-center space-x-3 rtl:space-x-reverse relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" class="fill-none stroke-current text-white stroke-2" />
                  <path d="M7 13l3 3 7-7" class="stroke-current text-white" />
                </svg>
                <span class="relative">
                Personalised Road Map
                  <span class="absolute top-8 bottom-0 left-0 w-full h-0.5 bg-white"></span>
                </span>
              </li>
              <li class="flex items-center space-x-3 rtl:space-x-reverse relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" class="fill-none stroke-current text-white stroke-2" />
                  <path d="M7 13l3 3 7-7" class="stroke-current text-white" />
                </svg>
                <span class="relative">
                Tips To Improve
                  <span class="absolute top-8 bottom-0 left-0 w-full h-0.5 bg-white"></span>
                </span>
              </li>
            </ul>
          </div>

      </section>
      
      
      <section className=' mt-[-210px] '>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill="#0A5783" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,149.3C672,107,768,85,864,101.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className='bg-[#0A5783] mt-[-2px]'>
            <div className='flex flex-col items-center '>
              <p className='font-[600] text-4xl md:text-5xl lg:text-6xl font-semibold leading-8 md:leading-10 lg:leading-12 mt-[-120px]'>How it Works?</p>
              
              <div className='mt-[-100px]'>
                <Image src={icons}/>
              </div>

              <div className='flex justify-between min-w-[900px] mt-[-180px]'>
                <div>
                  <p>Answer few </p>
                  <p>questions</p>
                </div>
                <div>
                  <p>Register using </p>
                  <p>phone and otp</p>
                </div>
                <div >
                  <p>Get report and </p>
                  <p>personal roadmap</p>
                </div>
                
              </div>

              <button class=" relative top-[40px] bg-[#FB7306] hover:bg-[#E26805] text-white font-bold py-2 px-4 rounded-full shadow-[1px_1px_1px_1px_#074553]">
                Get Started
              </button>
            </div>
        </div>  
        <div className='h-[100px] bg-[#0A5783]'>

        </div>

      </section>
      
      
    </div>
  )
}
