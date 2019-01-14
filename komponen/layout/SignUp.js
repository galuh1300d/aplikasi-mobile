import React from 'react'
import {Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
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


const SignUp = () => {
  return (
    <ScrollView style={[s.body]}>
        <View style={[s.h100, s.alignItemsCenter]}>
          <View 
          style={[{backgroundColor: '#60c0f9', height: '35%'}, s.w100, s.alignItemsCenter]}
          >
            <Image
              style={[{width: 100, height: 100}, s.mt4]}
              source={require('../assets/iconWhite.png')}
            />
            <Text style={[s.textWhite, s.mt3, s.mb5]}>DAFTAR</Text>
          </View>
          <View style={[s.body, s.alignItemsCenter, s.pt3, {width: '92%', bottom: '9%', borderRadius: 20}]}>
            <View style={[{width: '90%'}]}>
              <Text style={[s.textPrimary, {fontSize: 12}]}>Nama Lengkap</Text>
              <TextInput 
              style={[{borderBottomWidth: 1, borderBottomColor: 'gray'}, s.pt0, s.mb2]}
              />
              <Text style={[s.textPrimary, {fontSize: 12}]}>Email</Text>
              <TextInput
              style={[{borderBottomWidth: 1, borderBottomColor: 'gray'}, s.pt0, s.mb2]}
              />
              <Text style={[s.textPrimary, {fontSize: 12}]}>Password</Text>
              <TextInput
              style={[{borderBottomWidth: 1, borderBottomColor: 'gray'}, s.pt0, s.mb2]}
              />
              <Text style={[s.textPrimary, {fontSize: 12}]}>Nomor Handphone</Text>
              <TextInput
              style={[{borderBottomWidth: 1, borderBottomColor: 'gray'}, s.pt0, s.mb5]}
              />
              <View style={[s.alignItemsCenter, s.mt3]}>
                <TouchableOpacity 
                  style={[
                    s.border, s.bgPrimary, s.w75, s.py3,  s.alignItemsCenter, {borderRadius: 50}, s.mb4
                  ]}>
                  <Text style={[s.textWhite]}>DAFTAR</Text>
                </TouchableOpacity>
              </View>  
            </View>
            <View style={[s.flexRow, s.mt5, s.pt2]}>
              <Text>Sudah punya akun? </Text>
              <TouchableOpacity
                onPress={() => {Actions.loginPage()}}
              >
                <Text style={[s.fontWeightBold]}>Masuk</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      </ScrollView>
  )
}

export default SignUp