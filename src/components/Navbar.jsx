import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent} from "@syncfusion/ej2-react-popups";

import { cart , chat, Notification, UserProfile } from '.'
import { useStateContext } from "../context/ContextProvider"
import avatar from "../data/avatar.jpg"


const NavButton = ({ title, customFunc, icon,color,dotColor })=>(
  <TooltipComponent content={title} position="BottomCenter">
     <button type="button" onClick={customFunc}
      style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
     >
      <span style={{ backgroundColor: dotColor }}
       className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      >
        {icon}
      </span>

     </button>
  </TooltipComponent>
)



export const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
   
  const handleClick = () => {}
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
       <NavButton title="Menu" 
       customFunc={() => setActiveMenu((prev)=>!prev)}
        color="blue" icon={<AiOutlineMenu/>} />

        <div className="flex">
        <NavButton title="Cart" 
          customFunc={() => handleClick('cart')}
          color="blue" icon={<FiShoppingCart/>} />

          <NavButton title="Chat" dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="blue" icon={<BsChatLeft/>} />

         <NavButton title="Notification" dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="blue" icon={<RiNotification3Line/>} />
         <TooltipComponent 
           content="Profile"
           position="BottomCenter"  
          >
            

            </TooltipComponent>

        </div>
    </div>
  )
}
