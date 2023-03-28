import React from 'react'
import styles from '../styles'

const Projects = () => {
    return (
        <div className={`relative sm:mt-[100px] w-full ${styles.boxWidth}  mb-[100px]`}>
            <div className={`relative text-white font-poppins z-[3]`}>
                <h1 className={`leftTitle w-[70%] font-[700] text-[24px] sm:text-[64px] mb-[35px]`}>Our Recent Projects</h1>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-3 sm:gap-[40px]  w-full">
                        <div className="flex flex-col items-center border-[1px] border-green px-[25px] py-[30px] rounded-[20px] bg-[#00110F]">
                            <div className='w-full h-[350px] bg-green rounded-[20px]'>
                            </div>
                            <h1 className='py-[20px] font-[700] text-[32px]'>Recent Projects 1</h1>
                            <a href="" className="font-[400] text-[24px]">INFO</a>
                        </div>
                        <div className="flex flex-col items-center border-[1px] border-green px-[25px] py-[30px] rounded-[20px] bg-[#00110F]">
                            <div className='w-full h-[350px] bg-green rounded-[20px]'>
                            </div>
                            <h1 className='py-[20px] font-[700] text-[32px]'>Recent Projects 2</h1>
                            <a href="" className="font-[400] text-[24px]">INFO</a>
                        </div>
                        <div className="flex flex-col items-center border-[1px] border-green px-[25px] py-[30px] rounded-[20px] bg-[#00110F]">
                            <div className='w-full h-[350px] bg-green rounded-[20px]'>
                            </div>
                            <h1 className='py-[20px] font-[700] text-[32px]'>Recent Projects 3</h1>
                            <a href="" className="font-[400] text-[24px]">INFO</a>
                        </div>
                    </div>
                    <a href="" className='pb-[8px] border-b-[2px] border-green text-green font-[700] text-[32px] mt-[65px]'>View All Projects</a>
                </div>
            </div>
        </div>
    )
}

export default Projects