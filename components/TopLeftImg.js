// next image
import Image from "next/image";

const env = process.env.NODE_ENV;
var image_name = 'top-left-img.png';
if(env == "development"){
    image_name = '/top-left-img.png';
}
else if (env == "production"){
    image_name = 'top-left-img.png';
}

const TopLeftImg = () => {
  return (
      <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
        <Image src={image_name} width={400} height={400} alt='' />
      </div>
  );
};

export default TopLeftImg;
