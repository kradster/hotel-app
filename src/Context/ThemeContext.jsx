import React, {useState, createContext, useEffect } from 'react'
import {Theme} from '../Theme'

const ThemesObject = {
    light:Theme.light,
    dim:Theme.dim,
    dark:Theme.dark,
}

/**
 * ThemeContext 
 * @property CurrentTheme => Variable
 * @property changeTheme => Function
 * 
 */
export const ThemeContext = createContext(); 



const ThemeContextProvider = ({children}) => {
const [CurrentThemeName, setCurrentThemeName] = useState(localStorage.getItem("theme") || "light")
const [CurrentTheme, setCurrentTheme] = useState(ThemesObject[localStorage.getItem("theme")] || ThemesObject.light)


/**
 * changeTheme Function to change theme
 * @param {*} theme  [dark,light]
 */

const changeTheme = (theme)=>{
    console.log("__theme__",theme);
    localStorage.setItem("theme",theme)
    setCurrentThemeName(theme);
    if(!!ThemesObject[theme]) setCurrentTheme(ThemesObject[theme])
    else setCurrentTheme(CurrentTheme)
}

    return (
        <ThemeContext.Provider value={{CurrentTheme,changeTheme,CurrentThemeName}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
