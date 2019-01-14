import React from 'react'
import {Text, View, TouchableOpacity, TextInput, Image, ScrollView, Linking} from 'react-native'
import HeaderBackButton from './HeaderBackButton'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Consultant = () => {
  return (
    <View>
      <HeaderBackButton py={s.pb2}>
        <Text style={[s.h4, s.textWhite ]}>Consultant</Text>
      </HeaderBackButton>
      <View style={[s.body, s.m2, s.alignItemsCenter]}>
        <View style={[s.flexRow]}>
          <View style={[s.mx5, s.my3]}>
            <Text>Weekdays</Text>
            <Text style={[s.fontWeightBold]}>7 am - 7 pm</Text>
          </View>
          <View style={[s.mx5, s.my3]}>
            <Text>Weekends</Text>
            <Text style={[s.fontWeightBold]}>6 am - 6 pm</Text>
          </View> 
        </View>
        <View style={[s.flexRow]}>
          <TouchableOpacity onPress={() => {Linking.openURL('whatsapp://send?text=hello&phone=083819885572')}}>
            <MaterialCommunityIcons style={[s.mx5, s.mb4, s.mt2]} name="whatsapp" color="#60c0f9" size={30} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {Linking.openURL('mailto:mailto:prasastij922@gmail.com')}}>
            <MaterialCommunityIcons style={[s.mx5, s.mb4, s.mt2]} name="email" color="#60c0f9" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {Linking.openURL('tel://089631373778')}}>
            <MaterialCommunityIcons style={[s.mx5, s.mb4, s.mt2]} name="phone" color="#60c0f9" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Consultant
