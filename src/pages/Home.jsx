import React from "react";
import HeroSlider from "./Heroslider";

import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import PromotionalBanner from "./PromotionalBanner";
import TrendingCollections from "./TrendingCollections";
import WhyChooseUs from "./WhyChooseUs";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <PromotionalBanner />
      <TrendingCollections />
      <WhyChooseUs />
      <CustomerReviews />
    </>
  );
};

export default Home;