import { Hero } from 'components/HomeComp/Hero/Hero';
import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO
        title="HomeForest Shop"
        description="Take good care of your your plant. You can buy the best plants for your house or apartment. Get advice and help with plant care and maintenance"
      />

      <Hero />
    </>
  );
};

export default HomePage;
