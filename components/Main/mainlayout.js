import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "../Testimoni";
import ButtonPrimary from "../misc/ButtonPrimary";
import ButtonOutline from "../misc/ButtonOutline.";

import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      style={{marginTop:"100px"}}
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              What are you looking for?
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              We provide various kinds of AI tools here. You can choose useful features here which will make your life btter and easier.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                  Article and Blog Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                  Article Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Article Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            
          </div>
         </div>
        </div>
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Article Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Article Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'400px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Article Writer
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Few Keywords
                  </li>
                  <li className="relative check custom-list my-2">
                    High Accuracy
                  </li>
                  <li className="relative check custom-list my-2">
                    Creative
                  </li>
                  <li className="relative check custom-list my-2">
                    Interesting
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  
                  <ButtonOutline><Link href='/main/articleWriter'>Start</Link></ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
                  
          </div>
         </div>
        </div>
        
    </div>
  );
};

export default Pricing;
