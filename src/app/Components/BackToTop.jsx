"use client"
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';


const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const [isVisible1, setIsVisible1] = useState(false);
  
    // Function to handle scroll events
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   console.log(scrollTop)
      setIsVisible(scrollTop > 800); // Set the scroll position where you want the button to appear (e.g., 300 pixels)
    };
  
    // Add scroll event listener when component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Function to scroll back to the top when the button is clicked
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    // Render the back to top button
    return (
        <div className="flex fixed z-20 right-5 bottom-1 justify-end items-center py-12 text-white">
      <div className={` ${isVisible ? 'block' : 'hidden'}`}>
<button onClick={scrollToTop} className="ml-8 bg-[#FE4900] [#131313] backdrop-blur-xl inline-flex text-[#ffffff] border border-[#3F2213] rounded-full px-4 py-4 focus:outline-none text-lg">
  <svg className=' rotate-[-90deg] fill-current text-white' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 12 12" fill="currentColor">
  <g clipPath="url(#clip0_2_128)">
  <path d="M11.8625 5.66819C11.8624 5.66805 11.8623 5.66789 11.8621 5.66775L9.41278 3.23025C9.22929 3.04765 8.9325 3.04833 8.74985 3.23184C8.56723 3.41533 8.56793 3.71212 8.75142 3.89475L10.3959 5.53125H0.46875C0.209859 5.53125 0 5.74111 0 6C0 6.25889 0.209859 6.46875 0.46875 6.46875H10.3959L8.75144 8.10525C8.56795 8.28787 8.56725 8.58466 8.74988 8.76815C8.93252 8.95169 9.22934 8.95233 9.4128 8.76975L11.8621 6.33225C11.8623 6.33211 11.8624 6.33194 11.8625 6.3318C12.0461 6.14857 12.0455 5.85082 11.8625 5.66819Z" fill="#3F2213" />
  </g>
  <defs>
  <clipPath id="clip0_2_128">
  <rect width={12} height={12} fill="white" />
  </clipPath>
  </defs>
  </svg>
</button>
      </div>
      </div>
    );
  };
  

export default BackToTopButton