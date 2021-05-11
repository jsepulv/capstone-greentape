import React from 'react'
import './App.css'
import Home from './pages/Home'

import {Switch,Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </div>
    )
}

export default App
