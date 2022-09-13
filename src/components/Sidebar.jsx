import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups"

import { links } from "../data/dummy";

export const Sidebar = () => {
    const activeMenu = true;

  return (
    <div className="h-screen ml-3 md:overflow-hidden 
     overflow-auto md:hover:overflow-auto pb-10">
       { activeMenu && <>
        <div className="flex justify-between items-center">
           <Link to="/"  onClick={()=>{}} className="items-center gap-3 ml-3 mt-4 
           flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" >
             <SiShopware /> <span>Shoppy </span>
           </Link>
           <TooltipComponent content="Menu" position='BottomCenter'>
              <button type="button" className="">
                <MdOutlineCancel />
              </button>
           </TooltipComponent>
        </div>
       </>}  
    </div>
  )
}
