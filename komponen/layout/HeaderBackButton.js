import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'

import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const HeaderBackButton = ({children, py}) => {
  return (
    <View 
    style={[{backgroundColor: '#60c0f9'}, s.justifyContentCenter, s.py3, py, s.flexRow]}>
      <TouchableOpacity onPress={() => {Actions.pop()}}>
        <MaterialIcons name="arrow-back" color="white" size={25} />
      </TouchableOpacity>
      <View style={[s.alignItemsCenter,{width: '90%'}]}>
        {children}
      </View>
    </View>
  )
}

export default HeaderBackButton
