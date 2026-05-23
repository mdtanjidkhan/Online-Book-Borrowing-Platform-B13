import Banar from "@/components/homepage/Banar";
import FAQ from "@/components/homepage/FAQ";
import FeatureBooks from "@/components/homepage/FeatureBooks";
import MarqueeText from "@/components/homepage/MarqueeText";
import Testimonials from "@/components/homepage/testimonials/Testimonials";
import Image from "next/image";

import React from 'react';

const Home = () => {
  return (
    <div>
        <Banar></Banar>
        <FeatureBooks></FeatureBooks>
        <MarqueeText></MarqueeText>
          <FAQ></FAQ>
         <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
