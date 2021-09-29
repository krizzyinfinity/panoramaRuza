import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
function About() {
return (
    <>
<Hero hero="roomHero1" />
<section className="featured-rooms">
<Title  title="our story" />

<p className="myp">We are a husband and a wife from Zadar Croatia. This house was Mira's family home that was transformed into apartments throughout years. This project was and still is our great passion. We have been in this business for almost 20 years and have many regular guests We love travelling and have travelled together many countries and continents. It is very exciting to see how other people live and what are their habbits. That is why we try so hard to provide an unforgettable holiday for our guests and are always here at service. Looking forward to host you and to show you our beautiful island.</p>
</section>
</>
);

}


export default About;
