import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = 'flex justify-center items-center'
  return (
    <nav>
      <div className={`${flexBetween} z-30 py-6 fixed top-0`}>
        <div className={`${flexBetween} mx-auto w-full`}>
          {/* Left side */}
          <div className={`${flexBetween}  w-full`}>
            <img src={Logo} alt="logo" className="" />
          </div>
          {/* Right side */}
          <div className={`${flexBetween}  w-full`}>
           {/* Inner most left side */}
            <div className={`${flexBetween} gap-6 w-full`}>
              {/* ul li home,  benefits, Our classes ,contact us */}
              <ul className="flex  items-center mx-auto w-full justify-center gap-x-5">
                <li className="text-gray-500 hover:text-gray-900">Home</li>
                <li className="text-gray-500 hover:text-gray-900">Benefits</li>
                <li className="text-gray-500 hover:text-gray-900">Our classes</li>
                <li className="text-gray-500 hover:text-gray-900">Contact us</li>
              </ul>
              </div>
            {/* Inner most right side */}
          
              </div>
              <div className={`${flexBetween} gap-8 w-full`}>
              {/* a-signup button-become a member */}
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Sign up
              </a>
              <button className="bg-gray-900 text-white px-6 py-2  rounded-md">
                Become a member
              </button>
              </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar