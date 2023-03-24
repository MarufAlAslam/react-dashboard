import React from 'react'
import Cards from './cards/Cards'
import TopBar from './topbar/Topbar'

const MainBody = () => {
    return (
        <div className='pt-[24px] px-5 w-[calc(100vw-260px)] min-h-screen'>
            <TopBar/>
            <Cards/>
        </div>
    )
}

export default MainBody