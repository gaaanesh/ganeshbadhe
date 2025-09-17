import Image from 'next/image';

import SagarFullPose from '/public/images/ganeshbadhe-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const ServiceSection = () => { 
  return (
    <Container  id="services">
        <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Services" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          From idea to launch—UI/UX, websites, apps, and more.
        </Typography>
      </div>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">


              {/* Content */}

{/* <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70"> */}
              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  UX/UI Design
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  Clean, user-friendly designs for websites, mobile apps, and desktop software.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/uiux-design-icon.png' className="opacity-75 block dark:hidden max-w-[65px] w-full" />
                              <img src='/images/uiux-design-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  Website Design & Development
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  Custom websites built on Framer, WordPress, or Wix—responsive and SEO-ready.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/web-development-icon.png' className="opacity-75 block dark:hidden max-w-[65px] w-full" />
                              <img src='/images/web-development-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  Website Redesign
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  Modernize outdated websites for better user experience and conversions.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/website-redesign-icon.png' className="opacity-75 block dark:hidden max-w-[65px] w-full" />
                              <img src='/images/website-redesign-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">


              {/* Content */}


              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  App Design
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  UI/UX for mobile and web apps with developer-ready prototypes.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/app-development-icon.png' className="opacity-75 block dark:hidden max-w-[65px] w-full" />
                            <img src='/images/app-development-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  E-Commerce Websites
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  High-converting online stores using WooCommerce, Wix Stores, or Framer.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/ecommerce-design-icon.png' className="opacity-75 block dark:hidden max-w-[65px] w-full" />
                              <img src='/images/ecommerce-design-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="md:w-1/3 flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-gray-50 dark:border-gray-100 dark:shadow-neutral-700/70">
                  <div className="p-4 md:p-5">
                      <div className='flex'>
                          <div className='w-3/4 mr-1'>
                              <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
                                  End-to-End Product Design
                              </h3>
                              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                  From idea to launch—research, design, and development support.
                              </p>
                          </div>
                          <div className='w-1/4 p-2'>
                              <img src='/images/product-design-icon.png' className=" block dark:hidden max-w-[65px] w-full" />
                              <img src='/images/product-design-white-icon.png' className="opacity-75 hidden dark:block max-w-[65px] w-full" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

       {/* <div className="flex w-full flex-col justify-between gap-6 md:flex-row">

<div className="flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
  <div className="p-4 md:p-5">
    <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
      App Design
    </h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      UI/UX for mobile and web apps with developer-ready prototypes.
    </p>
  </div>
</div>
      
<div className="flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
  <div className="p-4 md:p-5">
    <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
      E-Commerce Websites
    </h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      High-converting online stores using WooCommerce, Wix Stores, or Framer.
    </p>
  </div>
</div>
<div className="flex flex-col bg-white border border-gray-200 border-t-4 border-t-black-950 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
  <div className="p-4 md:p-5">
    <h3 className="text-2xl font-semibold  text-gray-800 dark:text-white">
      End-to-End Product Design
    </h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      From idea to launch—research, design, and development support.
    </p>
  </div>
</div>




      </div> */}
    </Container>
  );
};

export default ServiceSection;
