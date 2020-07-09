import React from 'react'
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";

import { Router, Scene } from 'react-native-router-flux'

const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "login" component = {Login}  initial = {true} />
          <Scene key = "registration" component = {Registration} />
       </Scene>
    </Router>
 )
 export default Routes