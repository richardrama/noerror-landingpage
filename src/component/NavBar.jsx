import React from 'react'

const NavBar = () => {
    return (
        <div className={`bg-darkGreen w-full flex flex-col items-center`}>
            {/* Desktop */}
            <div className={` flex justify-between items-center py-[20px] px-[15px] sm:py-[40px] sm:px-[35px] w-full max-w-[1440px] `}>
                <img src="/noerror-landingpage/src/assets/logo-text.png" alt="Logo" className='h-[36px] sm:h-auto' />
                <ul className='hidden sm:flex items-center'>
                    <li className=''><img src="/noerror-landingpage/src/assets/discord.svg" alt="discord" /></li>
                    <li className='ml-[35px]'><img src='/noerror-landingpage/src/assets/github.svg' alt="github" /></li>
                    <li className='ml-[35px]'><img src='/noerror-landingpage/src/assets/youtube.svg' alt="youtube" /></li>
                </ul>
            </div>

            {/* Mobile */}
        </div>
    )
}

export default NavBar