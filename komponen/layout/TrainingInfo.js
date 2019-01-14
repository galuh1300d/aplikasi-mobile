import React from 'react'
import {Text, View, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import HeaderBackButton from './HeaderBackButton'
import { Actions } from 'react-native-router-flux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const TrainingInfo = () => {
  return (
    <View style={[s.body]}>
      <HeaderBackButton py={s.pb2}>
        <Text style={[s.h4, s.textWhite ]}>Detail Training</Text>
      </HeaderBackButton>
      <ScrollView>
      <Image source={require('../assets/1.jpg')} style={[{height: '25%'},s.w100]} />
      <View style={[s.container]}>
        <Text style={[s.h4, s.mt3]}>Pelatihan Golden Treatment for Mom and Baby</Text>
        <View style={[s.flexRow, s.mt2]}>
          <MaterialCommunityIcons style={[s.mr3]} name="calendar" size={20} />
          <View>
            <Text style={[s.h6, s.pb0, s.mb0]}>Friday, October 5</Text>
            <Text style={[{fontSize: 12}, s.pt0, s.mt0]}>8:00 AM</Text>
          </View>
        </View>
        
        <View style={[s.flexRow, s.mt2]}>
          <MaterialCommunityIcons style={[s.mr3]} name="map-marker" size={20} />
          <View style={{width: '90%'}}>
            <Text style={[s.h6, s.pb0, s.mb0]}>Saka Hotel Medan, Jalan Gagak Hitam, Sei Sikambing B, Kota Medan, Sumatera Utara</Text>
            <Text style={[{fontSize: 12}, s.pt0, s.mt0]}>CP: 082124351882 (Bidan Jojo)</Text>
          </View>
        </View>

        <View style={[s.flexRow, s.mt2, s.mb3]}>
          <Ionicons style={[s.mr3]} name="md-pricetag" size={20} />
          <View>
            <Text style={[s.h6, s.pb0, s.mb0]}>Rp. 2.500.000</Text>
          </View>
        </View>

        <View style={[s.borderTop, s.borderBottom]}>
          <Text style={[s.h5, s.mt3]}>Deskripsi</Text>
          <Text>Baby Massage Fisiologis</Text>
          <Text>Baby Spa</Text>
          <Text>Mom Postnatal Treatment</Text>
          <Text>Mom Postnatal Treatment</Text>
          <Text>Mom Postnatal Treatment</Text>
          <Text>Mom Postnatal Treatment</Text>
          <Text>Mom Postnatal Treatment</Text>
          <Text>Mom Postnatal Treatment</Text>
        </View>

        <View style={[s.borderTop, s.borderBottom]}>
          <Text style={[s.h5, s.mt3]}>Location</Text>
          <View style={[s.m5, s.p5]}></View>
          <View style={[s.m5, s.p5]}></View>
          <View style={[s.m5, s.p5]}></View>
        </View>

      </View>
      </ScrollView>
      <View 
        style={[s.body, s.borderTop, s.py3, s.px5, {position: 'absolute', left: 0, right: 0, bottom: 50}]}>
        <TouchableOpacity 
        style={[{borderRadius: 50}, s.bgPrimary, s.py3, s.justifyContentCenter, s.alignItemsCenter]}>
          <Text style={[s.textWhite]}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TrainingInfo
