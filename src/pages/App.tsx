import { useEffect } from 'react';
import Helmet from 'react-helmet';
import Hero from '../components/screen/Hero';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store - Home</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
