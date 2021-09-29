import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

function Home() {
return (
<>   
  <Hero hero="defaultHero">
  <Banner title="Apartments with jacuzzi" subtitle="A lot of extra activities">
  <Link to="/book" className="btn-primary">
  Book now</Link>
  </Banner>
  </Hero>
<Service />
<FeaturedRooms />
<Footer footer="defaultFooter" />
</>
);

}


export default Home;
