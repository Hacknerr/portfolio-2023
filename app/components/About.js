"use client"; // This is a client component 👈🏽

import React, {useEffect, useState} from 'react';

const About = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const birthdate = new Date('1996-12-05');
        const updateAge = () => {
            const now = new Date();
            const ageInMilliseconds = now - birthdate;
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // converts milliseconds to years
            setAge(ageInYears);
        };

        updateAge();
        const intervalId = setInterval(updateAge, 1); // updates every millisecond

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div name='about' className='w-full h-screen bg-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <h2 className='text-4xl font-bold inline border-b-4 border-amber-500'>
                            About
                        </h2>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <h2>{age.toFixed(8)} y/o from Bærum, Norway. Bachelor in computer engineering from <a href='https://www.ntnu.edu/' target="_blank" rel="noopener noreferrer">NTNU.</a></h2>
                    </div>
                    <div>
                        <p className='text-gray-600'>I am passionate about building web applications that improves
                            the lives of those around me. I specialize in creating user-friendly UI/UX designs
                            for clients ranging from individuals and small-businesses all the way to large enterprise
                            corporations. I am currently seeking new opportunities that align with my skill set.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;