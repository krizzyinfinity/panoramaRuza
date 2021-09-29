import React from 'react'
import Hero from "../components/Hero";
import ButtonMailto from "../components/ButtonMailto";
import {Link} from "react-router-dom";

export default function Book () {
        return (
            <>
              <Hero hero="roomsHero"></Hero> 
              <div className="section-title"></div>
              <div className="section-title">

            <p>We have some novelties added on this year, so please send an email 
            with your exact dates and the number of people to: </p>
            <ButtonMailto label="this email" mailto="mailto:kristinamouly@outlook.com" />
            <p>We will respond within 15 minutes with an offer</p>
            <p>Thank you for your interest and your patience!</p>
          </div>

            </>
            
        );
    }

