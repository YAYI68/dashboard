import React, { createContext ,useContext, useState } from 'react';

const  StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,

}

export const ContextProvider = ({children}) => {
   const  [ activeMenu, setActiveMenu ] = useState(true);
   const [ isClicked, setIsClicked] = useState(initialState);
   const [ screenSize, setScreenSize ] = useState(undefined);
   const [ currentColor, setCurrentColor ] = useState('#03C9D7')
   const [ currentMode, setCurrentMode ] = useState('Light');
   const [ themeSettings, setThemeSettings ] = useState(false)


  const setMode = (e)=>{
  setCurrentMode(e.target.value);
  localStorage.setItem('themeMode',e.target.value);
  }

  const setColor = (color)=>{
    setCurrentColor(color);
    setThemeSettings(false);
    localStorage.setItem('colorMode',color);
    }

   const handleClick = (click) =>{
        setIsClicked({...initialState,[click]:true});
   }

   const closeClick = (click)=>{
    setIsClicked({...initialState,[click]:false});
   }

    return(
        <StateContext.Provider 
         value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setColor,
            setMode,
            themeSettings, 
            setThemeSettings,
            closeClick 
         }}
        >
            {children}
        </StateContext.Provider>
        ) 
}

export const useStateContext = ()=>useContext(StateContext)
