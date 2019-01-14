import React from 'react'
import {Text, View, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import HeaderSearch from './HeaderSearch'
import { Actions } from 'react-native-router-flux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()


const BidanMenu = () => {
  return (
    <View>
      <Image source={require('../assets/1.jpg')} style={[{height: '35%'},s.w100]} />
      <View style={[s.body, s.p3]}>
        <View style={[s.body, s.flexRow, s.mb3]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/20.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Anita Pera</Text>
            <Text style={[{width: '99%'}]}>Jl. Bunga Rampai II Simalingkar B medan Tuntungan Kota Medan Sumatera Utara</Text>
          </View>
        </View>
        <View style={[s.flexRow, s.alignItemsCenter]}>
          <View style={[s.btn, s.btnOutlineSuccess, s.py1, {borderWidth: 1}]}>
            <Text style={[s.textSuccess]}>OPEN</Text>
          </View>
          <Text style={[s.ml2, s.w75]}>08.00 - 02.00 WIB</Text>
          <MaterialCommunityIcons name="dots-vertical" size={20} />
        </View>
      </View>

      <View style={[s.flexRow, s.alignItemsCenter, s.justifyContentCenter]}>
        <View>
          <TouchableOpacity>
          <ImageBackground 
          source={require('../assets/1.jpg')} style={[{width: 190, height: 100}, s.m1, s.mt2]} imageStyle={[s.borderRounded]}>
            <View 
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[s.fontWeightBold, s.textWhite]}>Paket Kehamilan</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <ImageBackground imageStyle={[s.borderRounded]}
          source={require('../assets/1.jpg')} style={[{width: 190, height: 100}, s.m1]}>
            <View 
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[s.fontWeightBold, s.textWhite]}>Exercise</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground imageStyle={[s.borderRounded]}
          source={require('../assets/1.jpg')} style={[{width: 190, height: 100}, s.m1, s.mt2]}>
            <View 
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[s.fontWeightBold, s.textWhite]}>Paket Persalinan</Text>
            </View>
          </ImageBackground>
          <ImageBackground imageStyle={[s.borderRounded]}
          source={require('../assets/1.jpg')} style={[{width: 190, height: 100}, s.m1]}>
            <View 
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[s.fontWeightBold, s.textWhite]}>Paket Treatment</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

export default BidanMenu
