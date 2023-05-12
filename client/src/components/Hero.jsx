
import HeroImage from '../assets/hero.png'  
import {Link} from 'react-router-dom'

import React, { useState } from 'react' 

import LoginForm from './LoginForm';
import SignupForm from './SignUpForm'; 


function Hero() {

    const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div class="bg-white">

    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p class="text-base font-semibold tracking-wider text-cyan-600 uppercase"> Find your desired nonprofit organization</p>
                    <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Support high-impact projects in the US </h1>
                    <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Serve efficiently as philanthropist or corporate</p>
  
                    <a href={SignupForm} title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        <Link to="/signup" > Sign Up</Link>
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>


                    <p class="mt-5 text-gray-600"><a href={LoginForm}>Already joined us? </a><Link to="/login" className='login'>Log in</Link></p>


                </div>

                <div>
                    <img class="w-full" src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    </div>
  )
}

export default Hero;