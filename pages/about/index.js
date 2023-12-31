import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaRegSnowflake ,
  FaFlask,
  FaGitAlt,
} from "react-icons/fa";

import { TbBrandDjango, TbBrandVscode  } from "react-icons/tb";

import { FaJava } from "react-icons/fa6";

import {
  SiNextdotjs,
  SiMicrosoftsqlserver ,
  SiPostgresql,
  SiSqlite,
  SiMysql,
  SiPython ,
  SiCplusplusbuilder ,
  SiDatabricks ,
  SiJupyter ,
  SiSnowflake ,
  SiPycharm,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <TbBrandDjango key={5} />,
          <FaFlask key={6} />,
        ],
      },
      {
        title: 'Database Administration',
        icons: [
            <SiMysql key={1} />,
            <SiPostgresql key={2} />,
            <SiSqlite key={3} />,
            <SiMicrosoftsqlserver key={4} />
        ],
      },
      {
        title: 'Languages',
        icons: [
            <SiPython key={1} />,
            <FaJava key={2} />,
            <SiCplusplusbuilder key={3} />,
            <FaJs key={4} />
        ],
      },
      {
        title: 'Software Engineering',
        icons: [
            <SiDatabricks key={1} />,
            <SiJupyter key={2} />,
            <FaRegSnowflake key={3} />,
            <SiPycharm key={4} />,
            <TbBrandVscode key={5} />,
            <FaGitAlt key={6} />
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Senior Big Data Software Engineer - AT&T',
        stage: '06/2021 - Present',
      },
      {
        title: 'Graduate Assistant/Professor - SIUE',
        stage: '08/2019 - 5/2022',
      },
      {
        title: 'TDP Intern - AT&T',
        stage: '05/2020 - 8/2020',
      },
      {
        title: 'Automation Engineering Intern - Express Scripts',
        stage: '05/2019 - 8/2019',
      },
      {
        title: 'Software Engineering Intern - Tagg Logistics',
        stage: '05/2018 - 12/2018',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'MS Computer Science (SIUE)',
        stage: '2020 - 2021',
      },
      {
        title: 'BS Computer Engineering (SIUE)',
        stage: '2017 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Microsoft Azure Fundamentals',
        stage: 'AZ900',
      },
      {
        title: 'Microsoft Azure Data Fundamentals',
        stage: 'DP900',
      },
      {
        title: 'Microsoft Azure AI Fundamentals',
        stage: 'AI900',
      },
    ],
  },
];

// components
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
            <div className='flex-1 flex flex-col justify-center'>
                <motion.h2 variants = {fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2'>
                    Crafting Digital <span className='text-accent'>Masterpieces</span>
                </motion.h2>
                <motion.p variants = {fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden"
                className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                    5 years ago I started my career in Software Engineering. This has consisted of a mix of Full Stack
                    Web Development, AI/ML Software Engineering, Azure DevOps, and other aspects of the field. Within
                    the same timeframe I also completed my Masters in Computer Science with a specificity in AI.
                </motion.p>
                {/* counters */}
                <motion.div variants = {fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden"
                className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
                    <div className='flex flex-1 xl:gap-x-6'>
                        {/* experience */}
                        <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <CountUp start={0} end={5} duration={5} /> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
                        </div>
                        {/* projects */}
                        <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <CountUp start={0} end={20} duration={5} /> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* info */}
            <motion.div variants = {fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden"
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                    {aboutData.map((item, itemIndex) => {
                        return (
                        <div key={itemIndex}
                        className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                        cursor-pointer capitalize
                        xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute
                        after:-bottom-1 after:left-0`}
                        onClick = {() => setIndex(itemIndex)}
                        >{item.title}</div>
                        );
                    })}
                </div>
                <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                    {aboutData[index].info.map((item, itemIndex)=> {
                        return (
                            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                            items-center text-white/60'>
                                {/* title */}
                                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                <div className='hidden md:flex'>-</div>
                                <div>{item.stage}</div>
                                {/* icons */}
                                <div className='flex gap-x-4'>
                                    {item.icons?.map((icon, itemIndex)=> {
                                        return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;
