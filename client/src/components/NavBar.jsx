import React from 'react'
import logodark from '../assets/logodark.png' 
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
            <Link to="/" className='navbar-brand'>
                    <img class="w-auto h-8 lg:h-10" src={logodark} alt="" />
            </Link>
            </div>

            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                
                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/ourpeople" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Our people </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/whygiv2" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Why giv2? </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})}  to="/resources" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Resources </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})}  to="/donate" className="text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Donate </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})}  to="/CharitySearch" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 border border-transparent rounded-md lg:inline-flex hover:bg-cyan-500 focus:bg-cyan-500"> Search for Charity </NavLink>
            </div>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/ourpeople"  className="inline-flex py-2 text-base  font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Our people</NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/whygiv2" class="inline-flex py-2 text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Why giv2? </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/resources" class="inline-flex py-2 text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Resources </NavLink>

                <NavLink style= {({isActive}) =>({color: isActive && "red"})} to="/donate" class="inline-flex py-2 text-base font-medium text-orange-950 transition-all duration-200 hover:text-cyan-600 focus:text-cyan-600"> Donate </NavLink>
                
                <NavLink style= {({isActive}) =>({color: isActive && "red"})}  to="/CharitySearch" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 border border-transparent rounded-md lg:inline-flex hover:bg-cyan-500 focus:bg-cyan-500"> Search for Charity </NavLink>

                </div>
            </div>
        </nav>
    </div>
</header>

    </div>
  )
}

export default NavBar