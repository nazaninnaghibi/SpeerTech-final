import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Twitters from './twitters/Twitters';
import Navbar from '../components/Navbar/Navbar';
import Images from '../pages/Images';
import Auth from '../components/Authentication/Auth';
import Navigation from './Navigation';
import Pricing from '../pages/Pricing';
import Artist from "../pages/Artist";
import Payment from "../pages/Payment";
import "../App.scss";


const App = () => {
  const imageDetails = {
    width: 724,
    height: 550,
  };

return(

  <BrowserRouter>
  <Navigation/>
    <Container maxWidth="lg">   
      <Navbar />
      <Switch>
        <Route path="/" exact component={Images} />
        <Route path="/twitters" exact component={Twitters} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/payment" exact component={Payment} />
        <Route render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/pricing'
                render={() => <Pricing imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/artist/:id'
                render={() => <Artist imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
          )}
         />
      </Switch>
    </Container>
  </BrowserRouter>
  
);
}
export default App;