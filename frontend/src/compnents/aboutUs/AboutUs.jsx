import React from 'react';
import Navbar from '../navbar/Navbar';
import passportImg from "./1759217369576-princelidhoriya_PassportSizePhoto.jpg";
const AboutUs = () => {
  return (
    <>
    <Navbar />
    <section class="mt-[5rem] h-[150vh] text-xl">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <div class="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6" style={{ background: 'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)' }}>
              <a href="#">
                <img class="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={passportImg} alt="Prince Lidhoriya" />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Prince Lidhoriya</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Indian Institute of Technology Guwahati</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Mathematics and Computing</p>
              </div>
          </div>  
      </div>  
  </div>
</section>
</>
  )
}

export default AboutUs;

