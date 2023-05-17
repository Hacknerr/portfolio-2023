import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({title, backgroundImg, tech, projectUrl, comingSoon}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-amber-500 to-amber-200 cursor-pointer'>
            <Image className='rounded-xl group-hover:opacity-10 ease-in duration-200' src={backgroundImg} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                {!comingSoon && (
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                )}
            </div>
            {comingSoon && (
                <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-75 flex items-center justify-center'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Coming Soon</h3>
                </div>
            )}
        </div>
    )
}

export default ProjectItem