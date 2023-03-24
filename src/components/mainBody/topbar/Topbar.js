import React, { useState } from 'react'
import flag from "../../../assets/img/flag.png"
import avatar from "../../../assets/img/avatar.png"
import {FaAngleDown} from "react-icons/fa"
import {AiFillBell} from "react-icons/ai"

const TopBar = () => {

    const [flagImg, setFlagImg] = useState(flag)
    return (
        <div className='flex justify-between items-center ttbar'>
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
            <div className='w-1/3 flex justify-end items-center'>
                <img src={flagImg}/>
                <p className='m-0 ml-2 flex items-center'>English <FaAngleDown className='ml-2 text-gray-500 font-light'/></p>

                <button className='btn py-0 px-4 text-[#A2A5AA]'>
                    <AiFillBell/>
                </button>
                <button className='btn py-0 text-[#A2A5AA]'>
                    <img src={avatar} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default TopBar