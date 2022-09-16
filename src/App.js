import React,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Calendar,ColorMap,ColorPicker,
         Customer,Ecommerce,Editor,Kanban,
         Area,Orders,Bar,Pie,Pyramid,
         Financial,Line,Stacked,Employee
} from "./pages"
import { Sidebar, Navbar,Footer, ThemeSettings} from './components';
import { useStateContext } from "./context/ContextProvider"; 




function App() {
  const { activeMenu } = useStateContext();
  return (
    <div className="App">
     <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
         <div className="fixed right-4 bottom-4 z-[1000]">
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl rounded-full p-3 hover:drop-shadow-xl
             hover:bg-light-gray text-white"
             style={{backgroundColor:"blue",
            }}
             >
              <FiSettings />
            </button>
          </TooltipComponent>
         </div>
         {activeMenu ?(
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white shadow-xl">
            <Sidebar />
          </div>
         ):(
          <div className="w-0 dark:bg-secondary-dark-bg">
           <Sidebar /> 
          </div>
         ) }
         <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
         ${activeMenu?'md:ml-72':'flex-2'} `
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-bg navbar w-full">
            < Navbar />
          </div>
         <div>
           <Routes>
            {/* dashboard */}
            <Route path="/" element={<Ecommerce/>} />
            <Route path="/ecommerce" element={<Ecommerce/>} />

            {/* Pages */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employee/>}/>
            <Route path="/customers" element={<Customer/>}/>

            {/* Apps */}
            <Route path="/kanban" element={<Kanban/>}  />
            <Route path="/editor" element={<Editor/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/color-picker" element={<ColorPicker/>}  />

            {/* Charts */}
            <Route path="/line" element={<Line/>}  />
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>} />
            <Route path="/financial" element={<Financial/>} />
            <Route path="/pyramid" element={<Pyramid/>} />
            <Route path="/stacked" element={<Stacked/>} />
            
           </Routes>
         </div>
        </div>   
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
