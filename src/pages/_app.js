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
        <title>Erick Millan Marin - Software Developer Portfolio</title>
        <meta name="description" content="Explore the projects and skills of Erick Millan Marin, a dedicated software developer focused on delivering efficient and user-friendly applications." />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://briefcase-erickmilan.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Erick Millan Marin - Software Developer Portfolio" />
        <meta property="og:description" content="Explore the projects and skills of Erick Millan Marin, a dedicated software developer focused on delivering efficient and user-friendly applications." />
        <meta property="og:image" content="https://asset.cloudinary.com/dijacbsqo/795801800e4a7ac5d1f60633e099dc56" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="briefcase-erickmilan.vercel.app" />
        <meta name="twitter:url" content="https://briefcase-erickmilan.vercel.app" />
        <meta name="twitter:title" content="Erick Millan Marin - Software Developer Portfolio" />
        <meta name="twitter:description" content="Explore the projects and skills of Erick Millan Marin, a dedicated software developer focused on delivering efficient and user-friendly applications." />
        <meta name="twitter:image" content="https://asset.cloudinary.com/dijacbsqo/795801800e4a7ac5d1f60633e099dc56" />
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