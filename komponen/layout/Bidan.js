import React from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import HeaderSearch from './HeaderSearch'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Bidan = () => {
  return (
    <View>
      <HeaderSearch py={s.pb2} placeholder="Cari Berdasarkan Nama atau Alamat">
        <Text style={[s.h4, s.textWhite ]}>Bidan Senusa Care</Text>
      </HeaderSearch>
      <View style={[s.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => {Actions.bidanMenu()}} style={[s.body, s.flexRow, s.p3, s.mt2, s.mb1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/20.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Anita Pera</Text>
            <Text>Medan</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/19.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Helen Meha</Text>
            <Text>Makassar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/18.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Yohana Doa</Text>
            <Text>Manado</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/17.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Siti Hajar</Text>
            <Text>Semarang</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/16.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Vidya Asita</Text>
            <Text>Pontianak</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my1]}>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 60, borderRadius: 30}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}} />
          </View>
          <View style={[{width: '85%'}, s.ml4]}>
            <Text style={[s.fontWeightBold]}>Mardianum</Text>
            <Text>Sanggau</Text>
          </View>
        </TouchableOpacity>
        
        <View style={[s.m5, s.p5]}></View>
        <View style={[s.m3, s.p3]}></View>

      </ScrollView>
      </View>
    </View>
  )
}

export default Bidan
