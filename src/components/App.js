import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Vendors from './Vendors';
// import VMTeam from './VMTeam';
// import CMTeam from './CMTeam';
// import CSRTeam from './CSRTeam';

const App = () => 
(
  <div>
    <BrowserRouter>
      <div>
        <Header/>
        <br/>
        <div className="container">
          <Route exact path='/' component={Vendors}/>
{/*          <Route exact path='/VMTeam' component={VMTeam}/>
          <Route exact path='/CMTeam' component={CMTeam}/>
          <Route exact path='/CSRTeam' component={CSRTeam}/>*/}
        </div>
      </div>
    </BrowserRouter>
  </div>
)

export default App;
