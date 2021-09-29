import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
const Offers = () => {
  return (
<>
    <Hero hero="roomsHero">
    <Banner title="Our apartments" subtitle="Email us for special offers">
    <Link to="/book" className="btn-primary">
    Book now
    </Link>
    </Banner>
    </Hero>
    <RoomsContainer />
    </>
  );
};
export default Offers;
