"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePic from '/public/developer-pic.png'
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
    return (
        <div name='hero' className='w-full h-screen text-center pt-36 md:pt-0'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex md:justify-between items-center'>
                <div className='md:flex-2'>
                    <Image src={profilePic} alt="André" className='w-full h-auto'/>
                </div>
                <div className='md:flex-1'>
                    <h1 className='md:py-4'>
                        Hi, I&#39;m <span className='text-amber-500'>André</span>
                    </h1>
                    <h1 className="md:py-2">
                        <ReactTypingEffect
                            text={["A Full-Stack Developer", "A Next.js Developer", "A Computer Engineer"]}
                            cursorRenderer={cursor => <h1 className='text-amber-500'>{cursor}</h1>}
                            typingDelay={100}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={2000}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}
                                                >{char}</span>
                                            );
                                        })}
                                    </h1>
                                );
                            }}
                        />
                    </h1>
                    <p className='px-8 py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        This is my personal portfolio, the comprehensive showcase of my latest endeavors as a Full-Stack Developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;