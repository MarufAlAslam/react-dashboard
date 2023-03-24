import React from 'react'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-1/3'>
                <p className='m-0'>
                Hello, Christian!
                </p>
            </div>
            <div className='w-1/3'>
                <form action=''>
                    <input type='text' placeholder='Search for courses' className='search w-full p-2 rounded-lg focus:outline-none bg-transparent focus:border-blue-500'/>
                </form>
            </div>
            <div className='w-1/3 text-right'>
                <p className='m-0'>
                Hello, Christian!
                </p>
            </div>
        </div>
    )
}

export default TopBar