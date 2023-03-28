import React from 'react'
import styles from '../styles'

const About = () => {
    return (
        <div className={`relative sm:mt-[100px] w-full ${styles.boxWidth} sm:h-[90vh] mb-[100px]`}>
            <div className="circle absolute hidden sm:flex right-[70px] top-[0px] w-[150px] h-[150px]"></div>
            <div className="circle absolute hidden sm:flex left-[80px] bottom-[65px] w-[78px] h-[78px]"></div>
            <img src="../assets/background-code.png" alt="code-background" className='w-[178px] sm:w-[500px] lg:w-[auto] absolute z-[1] bottom-[50px] sm:bottom-[0] right-[20px] sm:right-[78px]' />
            <div className={`relative text-white font-poppins z-[3]`}>
                <h1 className={`leftTitle w-[70%] font-[700] text-[24px] sm:text-[64px] mb-[35px]`}>What is No Error Studio</h1>
                <p className='text-[16px] sm:text-[24px] max-w-[800px]'>We provide a vast variety of websites and discord bots which are
                    developed and nourished by our team and We have different
                    custom projects alongside. Unlike other bot shops,
                    we develop discord bots and websites according to the taste of
                    our customers. You name them and we got it. Customers bring satisfied
                    that is our main priority. Besides from bot orders, We provide free open source projects on our YouTube channel.
                    So why not get a bot today, not to someone else's choice
                    but yours. Not someone else's needs but yours.
                    Get it today! Make your imaginations comes to life with
                    no error</p>
            </div>
        </div>
    )
}

export default About