import React, { Component } from 'react';
import Lessons from './LessonComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';


import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    const HomePage = () => {
        return(
            <Home 
            />
        );
      }
    return (
        
      <div>
        <Header />
        <br></br>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/lesson' component={Lessons} />        
              <Redirect to="/home" />
          </Switch>
          <br></br>
        <Footer />
      </div>
    );
  }
}

export default Main;