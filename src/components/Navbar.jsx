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




export const Navbar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

    </div>
  )
}
