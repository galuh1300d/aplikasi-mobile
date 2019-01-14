import React from 'react'
import {Text, View, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import HeaderBackButton from './HeaderBackButton'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Training = () => {
  return (
    <View>
      <HeaderBackButton py={s.pb2}>
        <Text style={[s.h4, s.textWhite ]}>Training Center</Text>
      </HeaderBackButton>
      <ScrollView>
      <View style={[s.card, s.m2, s.borderRounded]}>
        <Image style={[s.cardImgTop, {height: 200, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3}]} source={require('../assets/1.jpg')} />
        <View style={[s.cardBody, s.alignItemsCenter]}>
          <Text style={[s.text]}>PELATIHAN GOLDEN TREATMENT FOR MOM AND BABY</Text>
          <Text> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <Text>Oct 5, 2018, 8:00:00 AM</Text>
        </View>
      </View>
      <View style={[s.card, s.m2, s.mt0, s.borderRounded]}>
        <Image style={[s.cardImgTop, {height: 200, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3}]} source={require('../assets/1.jpg')} />
        <View style={[s.cardBody, s.alignItemsCenter]}>
          <Text style={[s.text]}>PELATIHAN GOLDEN TREATMENT FOR MOM AND BABY</Text>
          <Text> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <Text>Oct 5, 2018, 8:00:00 AM</Text>
        </View>
      </View>
      <View style={[s.card, s.m2, s.mt0, s.borderRounded]}>
        <Image style={[s.cardImgTop, {height: 200, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3}]} source={require('../assets/1.jpg')} />
        <View style={[s.cardBody, s.alignItemsCenter]}>
          <Text style={[s.text]}>PELATIHAN GOLDEN TREATMENT FOR MOM AND BABY</Text>
          <Text> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <Text>Oct 5, 2018, 8:00:00 AM</Text>
        </View>
      </View>
      <View style={[s.card, s.m2, s.mt0, s.borderRounded]}>
        <Image style={[s.cardImgTop, {height: 200, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3}]} source={require('../assets/1.jpg')} />
        <View style={[s.cardBody, s.alignItemsCenter]}>
          <Text style={[s.text]}>PELATIHAN GOLDEN TREATMENT FOR MOM AND BABY</Text>
          <Text> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
          <Text>Oct 5, 2018, 8:00:00 AM</Text>
        </View>
      </View>
      <View style={[s.m4, s.p2]}></View>
      </ScrollView>
    </View>
  )
}

export default Training
