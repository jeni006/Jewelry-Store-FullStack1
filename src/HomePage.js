import React from 'react';
import HeroBanner from './components/HeroBanner';
import Highlights from './components/Highlights';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import SpecialOffers from './components/SpecialOffers';
import WhyChooseUs from './components/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Highlights/>
      <SpecialOffers/>
      <WhyChooseUs/>
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
