import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendContainer from "./components/Sidebar/Friends/Friend/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import store from "./redux/redux-store";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/friends' render={() => <FriendContainer store={store}/>}/>
                <Route path='/messages' render={() => <DialogsContainer store={store}/>}/>
                <Route path='/users' render={() => <UsersContainer store={store}/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer store={store}/>}/>
                <Route path='/music' render={() => <Music store={store} />}/>
                <Route path='/login' component={LoginPage} />
            </div>
        </div>
    );
}

export default App;
