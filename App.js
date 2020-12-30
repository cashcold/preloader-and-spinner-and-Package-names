import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {SyncLoader } from 'react-spinners'
import {css} from '@emotion/react'
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
         }
    }

    
    render() { 
        const leaderCss = css`
        margin-top: 20%;
        margin-left: 40%;
        `
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                   <div className='preloader'>
                   <SyncLoader css={leaderCss} size={50} color='red' loading={true}/>
                   </div>
                    <div className='container1'>
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/>     <Route path='/preload' exact component={Preload}/> 
                              <Route path='/landing' exact component={LandingPage}/> 
                              {/* <Route path='/deposit' exact component={Deposit}/>  */}
                           </Switch>
                        </div>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;