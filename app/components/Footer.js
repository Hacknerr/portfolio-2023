import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsSpotify } from "react-icons/bs";

import Link from "next/link";

const Footer = () => {
    return (
        <div className='w-full bg-[#2d2e32] py-12'>
            <div className='flex justify-between items-center max-w-[1000px] mx-auto px-10'>
                <div className='text-white font-bold'>
                    Copyright © 2023. All rights are reserved
                </div>
                <div className='flex flex-row text-white'>
                    <Link href='https://www.linkedin.com/in/andr%C3%A9-g%C3%A4rtner/' target="_blank">
                        <AiFillLinkedin size={25} className='ml-2 transition-transform hover:scale-125'/>
                    </Link>
                    <Link href='https://github.com/Hacknerr' target="_blank">
                        <AiFillGithub size={25} className='ml-2 transition-transform hover:scale-125'/>
                    </Link>
                    <Link href='https://www.instagram.com/andre_gartner/' target="_blank">
                        <BsInstagram size={25} className='ml-2 transition-transform hover:scale-125'/>
                    </Link>
                    <Link href='https://open.spotify.com/artist/3ULLvYJLh0zVOkgOaAebOx?si=l5mH_sLERiqOw2mNlSCUWg' target="_blank">
                        <BsSpotify size={25} className='ml-2 transition-transform hover:scale-125'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
