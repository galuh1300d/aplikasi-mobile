import React, {Component} from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Login from './komponen/layout/Login'
import LoginPage from './komponen/layout/LoginPage'
import SignUp from './komponen/layout/SignUp'
import Home from './komponen/layout/Home'
import Profile from './komponen/layout/Profile'
import More from './komponen/layout/More'
import HomeCare from './komponen/layout/HomeCare'
import HomeCareInfo from './komponen/layout/HomeCareInfo'
import Pembayaran from './komponen/layout/Pembayaran'
import Bidan from './komponen/layout/Bidan'
import BidanMenu from './komponen/layout/BidanMenu'
import Training from './komponen/layout/Training'
import TrainingInfo from './komponen/layout/TrainingInfo'
import Consultant from './komponen/layout/Consultant'
import Store from './komponen/layout/Store'


const HomeIcon = () => {
  return (
    <Image source={require('./komponen/assets/icon.png')} style={{width: 35, height: 35, marginTop: 10}} />
  )
}

const ProfileIcon = () => {
  return (
    <MaterialIcons name="person" size={25} />
  )
}

const MoreIcon = () => {
  return (
    <MaterialCommunityIcons name="dots-vertical" size={25} />
  )
}

export default class App extends Component {
  render() {
    return (
      <Router 
      navigationBarStyle={{ backgroundColor: '#60c0f9'}} titleStyle={{color: 'white'}}>
        <Scene key="root" hideNavBar>
          <Scene key="auth" >
            <Scene key="login" component={Login} hideNavBar initial/>
            <Scene key="loginPage" component={LoginPage} hideNavBar/>
            <Scene key="signUp" component={SignUp} hideNavBar/>
          </Scene>

          <Scene key="main" hideNavBar tabs showLabel={false}>
            <Scene key="home" hideNavBar component={Home} icon={HomeIcon} />
            <Scene key="profile" hideNavBar component={Profile} icon={ProfileIcon} />
            <Scene key="more" hideNavBar component={More} icon={MoreIcon} />
          </Scene>
          <Scene key="homeCare" component={HomeCare} />
          <Scene key="homeCareInfo" component={HomeCareInfo} />
          <Scene key="pembayaran" component={Pembayaran} />
          <Scene key="bidan" component={Bidan} />
          <Scene key="bidanMenu" component={BidanMenu} />
          <Scene key="training" component={Training} />
          <Scene key="trainingInfo" component={TrainingInfo} />
          <Scene key="consultant" hideNavBar  component={Consultant} />
          <Scene key="store" hideNavBar  component={Store} />
        </Scene>
      </Router>
    );
  }
}