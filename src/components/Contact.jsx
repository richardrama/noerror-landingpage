import React from 'react'
import { contactDiscord, contactGithub, contactInstagram, contactLinkedin, contactTwitter, contactYoutube } from '../assets'
import styles from '../styles'

const Contact = () => {
    return (
        <div className={`${styles.boxWidth} relative`}>
            <div className="circle absolute hidden sm:flex right-[30%] bottom-[-50px] w-[150px] h-[150px]"></div>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col relative'>
                    <h1 className='text-white text-[64px] font-[700]'>Contact Us</h1>
                    <input type="text" placeholder='Name' className='rounded-[20px] mt-[50px] w-[150%] bg-black border-[1px] border-green py-[22px] px-[18px] text-white' />
                    <input type="text" placeholder='Email' className='rounded-[20px] mt-[30px] w-[150%] bg-black border-[1px] border-green py-[22px] px-[18px] text-white' />
                    <textarea name="" id="" placeholder='Your message' cols="30" rows="10" className='rounded-[20px] mt-[30px] w-[150%] bg-black border-[1px] border-green py-[22px] px-[18px] text-white'></textarea>
                </div>
                <div className='border-[1px] border-green rounded-[70px]  px-[30px] py-[50px]'>
                    <ul className='flex flex-col items-center gap-[45px]'>
                        <li className=''><a href=""><img src={contactDiscord} alt="" /></a></li>
                        <li className=''><a href=""><img src={contactLinkedin} alt="" /></a></li>
                        <li className=''><a href=""><img src={contactInstagram} alt="" /></a></li>
                        <li className=''><a href=""><img src={contactGithub} alt="" /></a></li>
                        <li className=''><a href=""><img src={contactYoutube} alt="" /></a></li>
                        <li className=''><a href=""><img src={contactTwitter} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact