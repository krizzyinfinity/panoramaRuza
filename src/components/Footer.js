import React from 'react';
import { FaEnvelope, FaPhone, FaAddressCard, FaFacebookSquare } from 'react-icons/fa';

export default function Footer({ footer }) {
return <footer className={footer}>
<h4>Contact us</h4>


<FaPhone /> <p className="myp2"> 00385981805406</p>

<FaEnvelope />
<p className="myp2">kristinamouly@outlook.com</p>
<FaAddressCard />
<p className="myp2"> Dragove 12 a</p>

<p className="myp2">23286 Dugi otok</p>

<p>Follow us: </p>
<a href="https://www.facebook.com/panoramaapartmentsCroatia">
    <FaFacebookSquare icon={FaFacebookSquare} className="myIcon" />      
  </a>          

</footer>;

}

Footer.defaultProps = {
  footer: "defaultFooter"
};
