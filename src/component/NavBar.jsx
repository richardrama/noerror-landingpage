import React from 'react'
import { Discord, Github, logoText, Youtube } from '../assets'

const NavBar = () => {
    return (
        <div className={`bg-darkGreen w-full flex flex-col items-center`}>
            {/* Desktop */}
            <div className={` flex justify-between items-center py-[20px] px-[15px] sm:py-[40px] sm:px-[35px] w-full max-w-[1440px] `}>
                <img src={logoText} alt="Logo" className='h-[36px] sm:h-auto' />
                <ul className='hidden sm:flex items-center'>
                    <li className=''><img src={Discord} alt="discord" /></li>
                    <li className='ml-[35px]'><img src={Github} alt="github" /></li>
                    <li className='ml-[35px]'><img src={Youtube} alt="youtube" /></li>
                </ul>
            </div>

            {/* Mobile */}
        </div>
    )
}

export default NavBar