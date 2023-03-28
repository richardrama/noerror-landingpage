import React from 'react'
import { serviceAi, serviceDiscord, serviceScript, serviceSoftware, serviceWebdev, serviceWebsite } from '../assets'
import styles from '../styles'

const Service = () => {
    return (
        <div className={`relative sm:mt-[100px] w-full ${styles.boxWidth} sm:h-[90vh] mb-[100px]`}>
            <div className={` text-white font-poppins z-[3] flex flex-col items-end`}>
                <h1 className={`rightTitle text-right w-[55%] font-[700] text-[24px] sm:text-[64px]`}>Services we offer!</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-[15px] sm:gap-[25px] mt-[35px] sm:mt-[85px] w-[90%] sm:w-full">
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceDiscord} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>Discord Bots</h1>
                    </div>
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceWebsite} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>Websites / Dashboards</h1>
                    </div>
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceScript} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>Custom Scripts</h1>
                    </div>
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceAi} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>AI Software Development</h1>
                    </div>
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceSoftware} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>Custom Software</h1>
                    </div>
                    <div className="flex items-center px-[8px] py-[11px] sm:px-[25px] sm:py-[30px] border-[2px] border-green rounded-[15px] sm:rounded-[35px]">
                        <div className="serviceCircle w-[43px] sm:w-[100px] h-[43px] sm:h-[100px] grid place-items-center mr-[16px]">
                            <img src={serviceWebdev} alt="" className='z-[10] w-[1rem] sm:w-[2.5rem] ' />
                        </div>
                        <h1 className='font-inter font-[800] text-[15px] sm:text-[30px] italic w-[88px] sm:w-[200px]'>Backend & Frontend</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service