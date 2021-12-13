import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendContainer from "./components/Sidebar/Friends/Friend/FriendsContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            < Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/friends' render={() => <FriendContainer /> } />
                <Route path='/messages' render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
    );
}

export default App;
