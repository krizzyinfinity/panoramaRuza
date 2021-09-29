import React from "react";
import './App.css';

import Offers from "./pages/Offers";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Book from "./pages/Book";
import SingleOffer from "./pages/SingleOffer";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return(
    <>
    
    <Navbar />
   
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/offers/" component={Offers} />
    <Route exact path="/about/" component={About} />
    <Route exact path="/book/" component={Book} />
    <Route exact path="/offers/:slug" component={SingleOffer} />
    <Route component={Error} />
    
</Switch>

</>
  );
}

export default App;
