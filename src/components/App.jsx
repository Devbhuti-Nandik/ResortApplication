import React from 'react';
import Nav from './others/Nav';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/Error';
import {Route,Switch} from 'react-router-dom';


function App()
{
    return(
        <div>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/rooms/" exact component={Rooms}/>
                <Route path="/rooms/:slug" component={SingleRoom}/>
                <Route path="" component={ErrorPage}/>
            </Switch>
       </div> 
    );
}
export default App;