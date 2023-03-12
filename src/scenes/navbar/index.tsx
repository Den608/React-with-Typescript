import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = 'flex  justify-between items-center'
  return (
    <nav>
      <div className={`${flexBetween} z-30 py-6 fixed top-0 px-2`}>
        <div className={`${flexBetween} mx-auto w-full gap-16`}>
          {/* Left side */}
          <div className={`${flexBetween}  w-full`}>
            <img src={Logo} alt="logo" className="" />
          </div>
          {/* Right side */}
          <div className={`${flexBetween}  w-full gap-8`}>
           {/* Inner most left side */}
            <div className={`${flexBetween} gap-6 w-5/6`}>
              {/* ul li home,  benefits, Our classes ,contact us */}
              <ul className="flex  items-center mx-auto w-full justify-center gap-x-10">
                <li className="text-gray-500 hover:text-gray-900">Home</li>
                <li className="text-gray-500 hover:text-gray-900">Benefits</li>
                <li className="text-gray-500 hover:text-gray-900">classes</li>
                <li className="text-gray-500 hover:text-gray-900">Contact</li>
              </ul>
              </div>
            {/* Inner most right side */}
            <div className={`${flexBetween} gap-8 w-full`}>
              {/* a-signup button-become a member */}
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Signup
              </a>
            <div className={`${flexBetween} gap-8`}>

            <button className="bg-gray-900 text-white  rounded-md  text-sm px-6 py-2">
                 Member
              </button>
            </div>
              </div>
          
              </div>
             
        </div>
      </div>
    </nav>
  )
}

export default Navbar