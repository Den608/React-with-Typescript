import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
type Props = {
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex  justify-between items-center'
  const isAboveMediumScreen = ("min-width:1060px");
  const [isMenuToggle,setIsMenuToggle]=useState<boolean>(false)
  return (
    <nav>
      <div className={`${flexBetween} z-30 py-6 fixed top-0 px-2`}>
        <div className={`${flexBetween} mx-auto w-full gap-16`}>
          {/* Left side */}
          <div className={`${flexBetween}  w-full`}>
            <img src={Logo} alt="logo" className="" />
          </div>
          {/* Right side */}
          {isAboveMediumScreen ? (
          <div className={`${flexBetween}  w-full gap-8`}>
          {/* Inner most left side */}
           <div className={`${flexBetween} gap-6 w-5/6`}>
             {/* ul Link home,  benefits, Our classes ,contact us */}
             <ul className="flex  items-center mx-auto w-full justify-center gap-x-10">
               <Link page='Home'  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link  page="classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link  page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
             </ul>
             </div>
           {/* Inner most right side */}
           <div className={`${flexBetween} gap-8 w-full`}>
             {/* a-signup button-become a member */}
             <a href="#"  className="text-gray-500 hover:text-gray-900">
               Signup
             </a>
           <div className={`${flexBetween} gap-8`}>

           <ActionButton setSelectedPage={setSelectedPage} >
                Member
             </ActionButton>
           </div>
             </div>
         
             </div>
             
            
          ):(
           <button className=' bg-secondary-500 rounded-full p-2'
           onClick={(()=>{setIsMenuToggle(!isMenuToggle)})}
           
           >
            <Bars3Icon className="h-6 w-6 text-white" />
           </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar