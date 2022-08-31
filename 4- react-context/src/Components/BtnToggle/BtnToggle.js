
import './BtnToggle.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

export default function BtnToggle() {

const{toggleTheme, theme} = useContext(ThemeContext)


    return (
        <button
        onClick={toggleTheme}
        className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>
            {theme ? "LIGHT Mode" : "DARK Mode" }
        </button>
    )
}
