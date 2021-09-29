import React, { Component } from "react";
import Title from "./Title";
import { MdRestaurantMenu, MdLocalMovies, MdLocalActivity } from "react-icons/md";
import {FaMusic}from 'react-icons/fa';
export default class Service extends Component {
state={
  services:[
    {
      icon:<MdRestaurantMenu />,
      title: "Breakfast & dinner",
      info:"Enjoy our continental breakfast for 7 euros per person and choose something from our dinner menu"
    },
    {
      icon:<MdLocalMovies />,
      title:"Open air silent cinema",
      info:"Complementory silent cinema on our sun deck for the perfect finish of the day"
    },
    {
      icon:<FaMusic />,
      title:"Silent disco",
      info:"Dance to any music you want without disturbing the local community. Also available on our sun deck"
    },
    {
      icon:<MdLocalActivity />,
      title:"Kayaks & bicycles",
      info:"Choose from our kayaks or bicycles and explore the nature"
    }
  ]
}


render() {
return (<section className="services">
<Title title="What we offer" />
<div className="services-center">
{this.state.services.map((item, index) => {

return <article key={index} className="service">

  <span>{item.icon}</span>
  <h6>{item.title}</h6>
  <p>{item.info}</p>
</article>
})}

</div>
  </section>
);
}
}
