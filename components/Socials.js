// links
import Link from "next/link";

// icons
import {RiGithubLine, RiLinkedinBoxLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine} from 'react-icons/ri';

import { MdOutlineMail } from "react-icons/md";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
        <Link href={'https://github.com/nickmonroe123'} className='hover:text-accent transition-all duration-300'>
            <RiGithubLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/nick-monroe-b6536a165/'} className='hover:text-accent transition-all duration-300'>
            <RiLinkedinBoxLine />
        </Link>
        <Link href={'/contact'} className='hover:text-accent transition-all duration-300'>
            <MdOutlineMail />
        </Link>
    </div>
  );
};

export default Socials;
