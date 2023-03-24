import React from 'react'
import MainBody from '../components/mainBody/MainBody'
import Sidebar from '../components/sidebar/Sidebar'
import '../assets/css/style.css'

const Main = () => {
    return (
        <div className='flex justify-between items-start'>
            <Sidebar/>
            <MainBody/>
        </div>
    )
}

export default Main