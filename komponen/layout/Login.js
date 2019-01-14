import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'

const
  BODY_COLOR = '#000022'

const constants = {
  BODY_COLOR
}

const bootstrapStyleSheet = new BootstrapStyleSheet(constants)
const s = styles = bootstrapStyleSheet.create()
const c = bootstrapStyleSheet.constants

const Login = () => {
    return (
      <View style={[s.body]}>
        <View style={[s.container, s.h100, s.alignItemsCenter, s.justifyContentCenter]}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../assets/icon.png')}
          />
          <Text style={[s.h3, s.mb2]}>Senusa Care</Text>
          <Text style={[s.mb4]}>Kami Ada Layaknya Keluarga</Text>
          <TouchableOpacity
          onPress={() => {Actions.loginPage()}}
          style={[
            s.border, s.borderPrimary, s.w75, s.py3,  s.alignItemsCenter, {borderRadius: 50}, s.mb3
          ]}>
            <Text style={[s.textPrimary]}>MASUK</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {Actions.signUp()}}
          style={[
            s.border, s.bgPrimary, s.w75, s.py3,  s.alignItemsCenter, {borderRadius: 50}, s.mb4
          ]}>
            <Text style={[s.textWhite]}>DAFTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Actions.main()}}>
            <Text style={{textDecorationLine:'underline'}}>Lewati</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default Login