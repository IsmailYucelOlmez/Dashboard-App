import { createContext } from "react";
import { useState } from "react";


export const DashboardContext=createContext();

export const DashboardContextProvider=({children})=>{

    const [mobileMenu,setMobileMenu]=useState(false);
    const [theme,setTheme]=useState("light");



    return( 
    <DashboardContext.Provider value={{mobileMenu,setMobileMenu,theme,setTheme}}>
       {children}
    </DashboardContext.Provider>
    )
}