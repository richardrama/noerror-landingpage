import React from 'react'
import styles from '../styles'

const Footer = () => {
    return (
        <div className={`${styles.boxWidth} relative bg-[#004A41] mt-[250px] flex justify-between w-full py-[150px]`}>
            <div className="flex flex-col items-start">
                <img src="../assets/logo-text.png" alt="logo" className='h-[48px] border-b-[1px] border-green' />
                <p className='pt-[25px] text-[24px] text-white max-w-[650px]'>Want epic websites , Discord Bots or custom projects?
                    Contact NoError Studios which will provide you with
                    well developed custom projects!</p>
                <div className='flex items-center mt-[55px]'>
                    <img src="../assets/license.svg" alt="" className='mr-[13px]' />
                    <p className='text-[24px] text-white'>
                        2023 Developed by NoError. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="">
                <div className="">
                    <ul>
                        <li className='mb-[20px]'><a href="" className='text-[24px] text-white font-[400]'>Privacy Policy</a></li>
                        <li className='mb-[20px]'><a href="" className='text-[24px] text-white font-[400]'>Terms of Service</a></li>
                        <li className='mb-[80px]'><a href="" className='text-[24px] text-white font-[400]'>FAQ</a></li>
                    </ul>
                </div>
                <div className="">
                    <ul className='flex gap-[25px]'>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9917 22.9165C22.2417 22.9165 23.2542 23.854 23.2312 24.9998C23.2312 26.1457 22.2437 27.0832 20.9917 27.0832C19.7625 27.0832 18.75 26.1457 18.75 24.9998C18.75 23.854 19.7396 22.9165 20.9917 22.9165ZM29.0083 22.9165C30.2604 22.9165 31.25 23.854 31.25 24.9998C31.25 26.1457 30.2604 27.0832 29.0083 27.0832C27.7792 27.0832 26.7687 26.1457 26.7687 24.9998C26.7687 23.854 27.7562 22.9165 29.0083 22.9165ZM39.3563 4.1665C41.7792 4.1665 43.75 6.179 43.75 8.67275V47.9165L39.1437 43.7603L36.55 41.3103L33.8062 38.7061L34.9438 42.754H10.6438C8.22083 42.754 6.25 40.7415 6.25 38.2477V8.67275C6.25 6.179 8.22083 4.1665 10.6438 4.1665H39.3542H39.3563ZM31.0854 32.7353C35.8208 32.5832 37.6437 29.4103 37.6437 29.4103C37.6437 22.3665 34.5562 16.6561 34.5562 16.6561C31.4729 14.2957 28.5354 14.3603 28.5354 14.3603L28.2354 14.7103C31.8792 15.8478 33.5708 17.4894 33.5708 17.4894C31.5814 16.3686 29.3888 15.6547 27.1208 15.3894C25.6822 15.2269 24.229 15.2409 22.7937 15.4311C22.6646 15.4311 22.5562 15.454 22.4292 15.4748C21.6792 15.5415 19.8562 15.8248 17.5646 16.854C16.7729 17.2248 16.3 17.4894 16.3 17.4894C16.3 17.4894 18.0792 15.7603 21.9354 14.6228L21.7208 14.3603C21.7208 14.3603 18.7854 14.2957 15.7 16.6582C15.7 16.6582 12.6146 22.3665 12.6146 29.4103C12.6146 29.4103 14.4146 32.5811 19.15 32.7353C19.15 32.7353 19.9417 31.7519 20.5875 30.9207C17.8646 30.0873 16.8375 28.3373 16.8375 28.3373C16.8375 28.3373 17.05 28.4915 17.4354 28.7103C17.4563 28.7311 17.4771 28.754 17.5208 28.7748C17.5854 28.8207 17.65 28.8415 17.7146 28.8853C18.25 29.1915 18.7854 29.4311 19.2771 29.629C20.1562 29.979 21.2062 30.329 22.4292 30.5707C24.2611 30.9298 26.1446 30.9368 27.9792 30.5915C29.0477 30.4008 30.0903 30.0854 31.0854 29.6519C31.8354 29.3665 32.6708 28.9498 33.55 28.3603C33.55 28.3603 32.4792 30.154 29.6708 30.9644C30.3146 31.7957 31.0875 32.7353 31.0875 32.7353H31.0854Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4583 10.4168C14.4578 11.5219 14.0183 12.5815 13.2365 13.3625C12.4547 14.1435 11.3947 14.5819 10.2896 14.5814C9.18451 14.5808 8.12493 14.1413 7.34392 13.3595C6.5629 12.5777 6.12445 11.5177 6.125 10.4126C6.12555 9.30756 6.56507 8.24797 7.34686 7.46696C8.12865 6.68595 9.18868 6.24749 10.2938 6.24805C11.3988 6.2486 12.4584 6.68812 13.2394 7.46991C14.0204 8.2517 14.4589 9.31173 14.4583 10.4168ZM14.5833 17.6668H6.25V43.7501H14.5833V17.6668ZM27.75 17.6668H19.4583V43.7501H27.6667V30.0626C27.6667 22.4376 37.6042 21.7293 37.6042 30.0626V43.7501H45.8333V27.2293C45.8333 14.3751 31.125 14.8543 27.6667 21.1668L27.75 17.6668Z" fill="white" />
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 4.1665C30.6604 4.1665 31.3667 4.18734 33.5875 4.2915C35.8063 4.39567 37.3167 4.74359 38.6459 5.26025C40.0209 5.78942 41.1792 6.50609 42.3375 7.66234C43.3969 8.70379 44.2166 9.96356 44.7396 11.354C45.2542 12.6811 45.6042 14.1936 45.7084 16.4123C45.8063 18.6332 45.8334 19.3394 45.8334 24.9998C45.8334 30.6603 45.8125 31.3665 45.7084 33.5873C45.6042 35.8061 45.2542 37.3165 44.7396 38.6457C44.2181 40.0369 43.3982 41.297 42.3375 42.3373C41.2958 43.3963 40.0361 44.216 38.6459 44.7394C37.3188 45.254 35.8063 45.604 33.5875 45.7082C31.3667 45.8061 30.6604 45.8332 25 45.8332C19.3396 45.8332 18.6334 45.8123 16.4125 45.7082C14.1938 45.604 12.6834 45.254 11.3542 44.7394C9.9632 44.2175 8.7032 43.3976 7.66252 42.3373C6.60295 41.2961 5.78321 40.0362 5.26044 38.6457C4.74377 37.3186 4.39585 35.8061 4.29169 33.5873C4.19377 31.3665 4.16669 30.6603 4.16669 24.9998C4.16669 19.3394 4.18752 18.6332 4.29169 16.4123C4.39585 14.1915 4.74377 12.6832 5.26044 11.354C5.78176 9.96271 6.60169 8.70259 7.66252 7.66234C8.7035 6.6024 9.96341 5.78261 11.3542 5.26025C12.6834 4.74359 14.1917 4.39567 16.4125 4.2915C18.6334 4.19359 19.3396 4.1665 25 4.1665ZM25 14.5832C22.2374 14.5832 19.5878 15.6806 17.6343 17.6341C15.6808 19.5876 14.5834 22.2372 14.5834 24.9998C14.5834 27.7625 15.6808 30.412 17.6343 32.3655C19.5878 34.319 22.2374 35.4165 25 35.4165C27.7627 35.4165 30.4122 34.319 32.3657 32.3655C34.3192 30.412 35.4167 27.7625 35.4167 24.9998C35.4167 22.2372 34.3192 19.5876 32.3657 17.6341C30.4122 15.6806 27.7627 14.5832 25 14.5832ZM38.5417 14.0623C38.5417 13.3717 38.2673 12.7093 37.7789 12.2209C37.2906 11.7325 36.6282 11.4582 35.9375 11.4582C35.2469 11.4582 34.5845 11.7325 34.0961 12.2209C33.6077 12.7093 33.3334 13.3717 33.3334 14.0623C33.3334 14.753 33.6077 15.4154 34.0961 15.9038C34.5845 16.3921 35.2469 16.6665 35.9375 16.6665C36.6282 16.6665 37.2906 16.3921 37.7789 15.9038C38.2673 15.4154 38.5417 14.753 38.5417 14.0623ZM25 18.7498C26.6576 18.7498 28.2473 19.4083 29.4194 20.5804C30.5915 21.7525 31.25 23.3422 31.25 24.9998C31.25 26.6574 30.5915 28.2472 29.4194 29.4193C28.2473 30.5914 26.6576 31.2498 25 31.2498C23.3424 31.2498 21.7527 30.5914 20.5806 29.4193C19.4085 28.2472 18.75 26.6574 18.75 24.9998C18.75 23.3422 19.4085 21.7525 20.5806 20.5804C21.7527 19.4083 23.3424 18.7498 25 18.7498Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 4.1665C13.4896 4.1665 4.16669 13.4894 4.16669 24.9998C4.16433 29.3733 5.53922 33.6365 8.09631 37.1846C10.6534 40.7326 14.2628 43.3854 18.4125 44.7665C19.4542 44.9478 19.8438 44.3228 19.8438 43.7748C19.8438 43.2811 19.8167 41.6415 19.8167 39.8957C14.5834 40.8603 13.2292 38.6207 12.8125 37.4478C12.5771 36.8478 11.5625 34.9998 10.6771 34.504C9.94794 34.1144 8.90627 33.1498 10.65 33.1248C12.2917 33.0978 13.4625 34.6353 13.8542 35.2603C15.7292 38.4103 18.725 37.5248 19.9209 36.979C20.1042 35.6248 20.65 34.7144 21.25 34.1936C16.6146 33.6728 11.7709 31.8748 11.7709 23.9061C11.7709 21.6394 12.5771 19.7665 13.9063 18.3061C13.6979 17.7853 12.9688 15.6498 14.1146 12.7853C14.1146 12.7853 15.8584 12.2394 19.8438 14.9228C21.5397 14.452 23.292 14.2151 25.0521 14.2186C26.8229 14.2186 28.5938 14.4519 30.2604 14.9207C34.2438 12.2123 35.9896 12.7873 35.9896 12.7873C37.1354 15.6519 36.4063 17.7873 36.1979 18.3082C37.525 19.7665 38.3334 21.6144 38.3334 23.9061C38.3334 31.9019 33.4646 33.6728 28.8292 34.1936C29.5834 34.8436 30.2354 36.0936 30.2354 38.0478C30.2354 40.8332 30.2084 43.0728 30.2084 43.7769C30.2084 44.3228 30.6 44.9728 31.6417 44.7644C35.7772 43.3682 39.3707 40.7102 41.9165 37.1647C44.4623 33.6192 45.8322 29.3647 45.8334 24.9998C45.8334 13.4894 36.5104 4.1665 25 4.1665Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.8813 13.5377C45.8334 17.2502 45.8334 25.0002 45.8334 25.0002C45.8334 25.0002 45.8334 32.7502 44.8813 36.4627C44.3521 38.5147 42.8042 40.1293 40.8438 40.6752C37.2834 41.6668 25 41.6668 25 41.6668C25 41.6668 12.7229 41.6668 9.15627 40.6752C7.18752 40.121 5.64169 38.5085 5.11877 36.4627C4.16669 32.7502 4.16669 25.0002 4.16669 25.0002C4.16669 25.0002 4.16669 17.2502 5.11877 13.5377C5.64794 11.4856 7.19585 9.871 9.15627 9.32516C12.7229 8.3335 25 8.3335 25 8.3335C25 8.3335 37.2834 8.3335 40.8438 9.32516C42.8125 9.87933 44.3584 11.4918 44.8813 13.5377ZM20.8334 32.2918L33.3334 25.0002L20.8334 17.7085V32.2918Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg className='w-[15px] sm:w-[30px]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M46.1708 11.7834C44.5803 12.487 42.8937 12.949 41.1667 13.1543C42.987 12.0656 44.3494 10.3522 45 8.33342C43.2917 9.35009 41.4187 10.0626 39.4667 10.448C38.1554 9.04505 36.4174 8.1146 34.5228 7.80131C32.6282 7.48802 30.6832 7.80945 28.9901 8.71562C27.2971 9.62179 25.9508 11.0619 25.1606 12.8122C24.3705 14.5624 24.1807 16.5246 24.6208 18.3938C21.1565 18.2202 17.7673 17.3199 14.6735 15.7515C11.5797 14.183 8.85025 11.9814 6.66249 9.28967C5.88809 10.6198 5.48114 12.1318 5.48332 13.6709C5.48332 16.6918 7.02082 19.3605 9.35832 20.923C7.97501 20.8795 6.62214 20.5059 5.41249 19.8334V19.9418C5.41291 21.9536 6.10909 23.9035 7.383 25.4606C8.65692 27.0178 10.4302 28.0865 12.4021 28.4855C11.1179 28.8335 9.77146 28.8848 8.46457 28.6355C9.02054 30.3672 10.1042 31.8818 11.5637 32.967C13.0233 34.0522 14.7857 34.6538 16.6042 34.6876C14.7968 36.107 12.7274 37.1563 10.5143 37.7755C8.3012 38.3946 5.98775 38.5715 3.70624 38.2959C7.68894 40.8572 12.3252 42.217 17.0604 42.2126C33.0875 42.2126 41.8521 28.9355 41.8521 17.4209C41.8521 17.0459 41.8417 16.6668 41.825 16.2959C43.531 15.0629 45.0033 13.5355 46.1729 11.7855L46.1708 11.7834Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer