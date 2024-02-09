import { createContext } from "react";
import { useState } from "react";


export const DashboardContext=createContext();

export const DashboardContextProvider=({children})=>{

    const [mobileMenu,setMobileMenu]=useState(false);
    const [theme,setTheme]=useState("light");
    const [themeColor,setThemeColor]=useState("#00BCD4");



    return( 
    <DashboardContext.Provider value={{mobileMenu,setMobileMenu,theme,setTheme,themeColor,setThemeColor}}>
       {children}
    </DashboardContext.Provider>
    )
}