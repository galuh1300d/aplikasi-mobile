import React from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import Swiper from 'react-native-swiper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Home = () => {
  return (
    <View>
      <Header py={s.py0}>
        <Image
          style={[{width: 50, height: 50}, s.mt1]}
          source={require('../assets/iconWhite.png')}
        />
      </Header>
      <ScrollView>
      <View style={[{height: '30%'}]}>
        <Swiper
          autoplay
        >
          <View>
            <Image source={require('../assets/1.jpg')} style={{height: 300, width: 500}} />
          </View>
          <View>
            <Image source={require('../assets/2.jpg')} style={{height: 300, width: 500}} />
          </View>
          <View>
            <Image source={require('../assets/3.jpg')} style={{height: 300, width: 500}} />
          </View>
        </Swiper>
      </View>

      <View style={[s.alignItemsCenter, s.mt1]}>
        <View style={[s.flexRow]}>
          <TouchableOpacity onPress={() => {Actions.homeCare()}}
          style={[s.bgWhite, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/homeIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Home Care</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {Actions.bidan()}}
          style={[
            s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, 
            {borderRadius: 10, width: '30%'}
            ]}>
            <Image 
              source={require('../assets/doctorIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Dokter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {Actions.training()}} style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%' }]}>
            <Image 
              source={require('../assets/statIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Training Center</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.flexRow]}>
          <TouchableOpacity onPress={() => {Actions.consultant()}} style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/consultantIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Consultant</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {Actions.store()}} style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/pillIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Store</Text>
          </TouchableOpacity>

          <View style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/newsIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Info Terkini</Text>
          </View>
        </View>

        <View style={[s.flexRow]}>
          <TouchableOpacity onPress={() => {Actions.consultant()}} style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/nurseIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Bidan</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {Actions.store()}} style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/labIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Laboratorium</Text>
          </TouchableOpacity>

          <View style={[s.bgWhite, s.w25, s.alignItemsCenter, s.py3, s.m2, {borderRadius: 10, width: '30%'}]}>
            <Image 
              source={require('../assets/contactIcon.png')}
              style={[{width: 60, height: 60}]}
            />
            <Text style={[s.fontWeightBold, s.mt3]}>Konsultasi Gizi</Text>
          </View>
        </View>

      </View>
      <View style={[s.m5, s.p5]}></View>
      <View style={[s.m5, s.p1]}></View>
      </ScrollView>
    </View>
  )
}

export default Home
