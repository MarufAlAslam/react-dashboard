import React from 'react'
import logo from "../../assets/img/logo.png"
import support from "../../assets/img/support.png"
import Menu from '../menu/Menu'
const Sidebar = () => {
    
    return (
        <div className='sidebar flex flex-col justify-between items-center'>
            <div className='topPart'>
                <a href='/'>
                <img src={logo} alt=""/>
            </a>
            <Menu/>
            </div>
                <img src={support} alt=""/>
        </div>
    )
}

export default Sidebar