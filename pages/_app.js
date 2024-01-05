import '../styles/globals.css';
// Next.js docs (default import)
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import {useRouter} from 'next/router';

// framer motion
import {AnimatePresence, motion} from 'framer-motion';

const env = process.env.NODE_ENV;
var image_name = '/favicon.ico';
if(env == "development"){
    image_name = '/favicon.ico';
}
else if (env == "production"){
    image_name = 'favicon.ico';
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <Head>
      <link rel="shortcut icon" href={image_name} />
    </Head>
    <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
