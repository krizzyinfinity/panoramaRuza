import React, { Component } from 'react'
import defaultBcg from "../images/ap14.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    //componentDidMount() {}
    render() {
        const  {getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return ( 
            <div className="error">
            <h3>No such apartment...</h3>
            <Link to="/offers" className="btn-primary">
            Back to apartments
            </Link>
            </div>
        );
        }
    const {name, description, capacity,  price, images} = room;
    const [main, ...defaultImages] = images;
    return (
     <>   
<StyledHero img={images[0] || this.state.defaultBcg}>
<Banner title={`${name}`}>
<Link to="/book" className="btn-primary">
Book now
</Link>
</Banner>
</StyledHero>
<section className="single-room">
 <div className="single-room-images">
{images.map((item, index) => {
  return   <img key={index} src={item} alt={name} />;
})}

 </div>
 <div className="single-room-info">
     <article className="desc">
<h3>Details</h3>
    <p>{description}</p>
    </article>
    <article className="info">
<h3>info</h3>
<h6>price:€{price}</h6>
<h6>capacity: {capacity}</h6>
    </article>
 </div>   
</section>
  </>          

);
            
}
}
