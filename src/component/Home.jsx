import React from 'react'

const Home = () => {
    return (
        <div className='grid place-items-center w-full max-w-[1440px] relative h-[90vh]'>
            <div className="circle absolute hidden sm:flex left-[136px] top-[65px] w-[150px] h-[150px]"></div>
            <div className="circle absolute hidden sm:flex right-[168px] bottom-[65px] w-[78px] h-[78px]"></div>
            <img src="../assets/background-logo.svg" alt="" className='absolute z-[1] w-[237px] sm:w-[auto]' />
            <div className='z-[2] flex flex-col items-center'>
                <h1 className='text-white font-[700] text-[31px] mx-[25px] sm:mx-[0] sm:text-[64px] max-w-[850px] text-center '>Your <span className='italic'>Progress</span> is <br></br> What We <span className='italic text-green'>Value</span> the Most</h1>
                <button className='h-[30px] sm:w-[180px] sm:h-[60px] relative glowingbutton flex items-center text-[10px] sm:text-[20px] font-inter text-black rounded-[50px] mt-[25px] py-[18px] px-[50px] bg-green'>HIRE US</button>
            </div>
        </div>
    )
}

export default Home