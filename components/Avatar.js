// next iamge
import Image from "next/image";

const env = process.env.NODE_ENV;
var image_name = 'robot.png';
if(env == "development"){
    image_name = '/robot.png';
}
else if (env == "production"){
    image_name = 'robot.png';
}

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
        <Image src={image_name}
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full'/>
    </div>
  );
};

export default Avatar;
