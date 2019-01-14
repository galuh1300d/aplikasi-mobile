import React from 'react'
import {View, TouchableOpacity, TextInput} from 'react-native'
import { Actions } from 'react-native-router-flux'

import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const HeaderSearch = ({py, children, placeholder}) => {
  return (
    <View 
    style={[{backgroundColor: '#60c0f9'}, s.justifyContentCenter, s.py3, py]}>
      <View style={[s.flexRow]}>
        <TouchableOpacity onPress={() => {Actions.pop()}}>
          <MaterialIcons style={[s.ml2]} name="arrow-back" color="white" size={25} />
        </TouchableOpacity>
        <View style={[s.alignItemsCenter,{width: '90%'}]}>
          {children}
        </View>
      </View>
      <View style={[s.body, s.flexRow, s.m2, s.p0, {height: 39}]}>
        <FontAwesome style={[{top: 13}, s.ml3, s.my0]} name="search" />
        <TextInput style={[s.ml5, s.my0]} placeholder={placeholder} />
      </View>
    </View>
  )
}

export default HeaderSearch
