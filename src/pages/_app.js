import '../styles/globals.css';
import Layout from '../components/Layout';
// Meta tags
import Head from 'next/head';
import Transition from '../components/Transition';
// router
import { useRouter } from 'next/router';
// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Briefcase Erick Millan Marin - Software Developer</title>
        <meta name="description" content="Welcome to my personal portfolio! I'm Erick Millan Marin, a skilled software developer passionate about creating impactful applications." />
        <meta property="og:title" content="Erick Millan Marin - Software Developer Portfolio" />
        <meta property="og:description" content="Explore the projects and skills of Erick Millan Marin, a dedicated software developer focused on delivering efficient and user-friendly applications." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/public/screen.webp`} />
        {/* <meta property="og:image" content="/public/screen.webp" /> */}
        <meta property="og:url" content="https://briefcase-erickmilan.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@erickdev" />
        <meta name="twitter:creator" content="@erickdev" />
        <meta name="twitter:title" content="Erick Millan Marin - Software Developer Portfolio" />
        <meta name="twitter:description" content="Discover the software development journey of Erick Millan Marin through a collection of innovative projects and skills." />
        <meta name="twitter:image" content="/public/screen.webp" />
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;