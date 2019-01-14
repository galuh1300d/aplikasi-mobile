import React from 'react'
import {View, Image} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Header = ({children, py}) => {
  return (
    <View style={[{backgroundColor: '#60c0f9'}, s.justifyContentCenter, s.alignItemsCenter, s.py3, py]}>
      {children}
    </View>
  )
}

export default Header
