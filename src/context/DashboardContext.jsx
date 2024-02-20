import { createContext } from "react";
import { useState } from "react";


export const DashboardContext=createContext();

export const DashboardContextProvider=({children})=>{

    const [mobileMenu,setMobileMenu]=useState(false);
    const [theme,setTheme]=useState("light");
    const [themeColor,setThemeColor]=useState("#00BCD4");

    const updateTheme=(value)=>{
        localStorage.setItem('theme',value);
    }

    const getTheme=()=>{

        let themeOption=localStorage.getItem('theme');
        if(themeOption===null){
            localStorage.setItem('theme',theme);
            themeOption=localStorage.getItem('theme');
        }
        return themeOption;
    }

    const updateThemeColor=(value)=>{
        localStorage.setItem('themeColor',value);
    }

    const getThemeColor=()=>{
        let themeColorOption=localStorage.getItem('themeColor');
        if(themeColorOption===null){
            localStorage.setItem('themeColor',themeColor);
            themeColorOption=localStorage.getItem('themeColor');
        }
        return themeColorOption;
    }


    return( 
    <DashboardContext.Provider value={{mobileMenu,setMobileMenu,theme,setTheme,themeColor,setThemeColor,updateTheme,getTheme,updateThemeColor,getThemeColor}}>
       {children}
    </DashboardContext.Provider>
    )
}