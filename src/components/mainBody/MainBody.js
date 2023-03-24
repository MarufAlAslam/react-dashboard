import React from 'react'
import Statistics from '../statistics/Statistics'
import Cards from './cards/Cards'
import TopBar from './topbar/Topbar'

const MainBody = () => {
    return (
        <div className='pt-[24px] px-5 w-[calc(100vw-260px)] min-h-screen'>
            <TopBar/>
            <Cards/>
            <div className='flex justify-between items-start'>
                <div className='w-3/4'>
                    <Statistics/>
                </div>
            </div>
        </div>
    )
}

export default MainBody