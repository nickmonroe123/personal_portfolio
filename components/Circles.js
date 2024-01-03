// next image
import Image from 'next/image';

const env = process.env.NODE_ENV;
var image_name = 'circles.png';
if(env == "development"){
    image_name = '/circles.png';
}
else if (env == "production"){
    image_name = 'circles.png';
}

const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
        <Image src={image_name} width={260} height={200} className='w-full h-full' alt='' />
    </div>
  );
};

export default Circles;
