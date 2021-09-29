import React from 'react'
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
export default function Error() {
  return <Hero hero="defaultHero">
  <Banner title="404" subtitle="Page not found">
  <Link to="/" className="btn-primary">
  Return home</Link>
  </Banner>
  </Hero>
}
