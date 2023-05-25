import React from 'react';
import propertyImg from '/public/assets/projects/property.jpg';
import cryptoImg from '/public/assets/projects/crypto.jpg'
import netflixImg from '/public/assets/projects/netflix.jpg'
import twitchImg from '/public/assets/projects/twitch.jpg'
import portfolioImg from '/public/assets/projects/portfolio.jpg'
import oldPortfolioImg from '/public/assets/projects/old-portfolio.jpg'
import marinetrafficImg from '/public/assets/projects/marinetraffic.jpg'

import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div name='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-amber-500'>
                    Projects
                </p>
                <h2 className='pb-8'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-3 gap-4'>
                    <ProjectItem
                        title='Portfolio 2023'
                        backgroundImg={portfolioImg}
                        projectUrl='/property'
                        tech='Next.js'
                        comingSoon='true'
                    />
                    <ProjectItem
                        title='Portfolio 2020'
                        backgroundImg={oldPortfolioImg}
                        projectUrl='/property'
                        tech='React.js'
                        comingSoon='true'
                    />
                    <ProjectItem
                        title='Marine Traffic Portal'
                        backgroundImg={marinetrafficImg}
                        projectUrl='/property'
                        tech='Python, React.js'
                        comingSoon='true'
                    />
                    <ProjectItem
                        title='Netflix App'
                        backgroundImg={netflixImg}
                        projectUrl='/netflix'
                        tech='React JS'
                        comingSoon='true'
                    />
                    <ProjectItem
                        title='Twitch UI'
                        backgroundImg={twitchImg}
                        projectUrl='/twitch'
                        tech='Next JS'
                        comingSoon='true'
                    />
                    <ProjectItem
                        title='Property Finder'
                        backgroundImg={propertyImg}
                        projectUrl='/property'
                        tech='React JS'
                        comingSoon='true'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;