import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from './Header'

const
  BODY_COLOR = '#000022'

const constants = {
  BODY_COLOR
}

const bootstrapStyleSheet = new BootstrapStyleSheet(constants)
const s = styles = bootstrapStyleSheet.create()
const c = bootstrapStyleSheet.constants

const Profile = () => {
  return (
    <View>
      <Header>
          <Text style={[s.h5, s.textWhite]}>Account</Text>
        </Header>
      <View style={[s.body]}>
        
        <View style={[s.container, s.alignItemsCenter, s.justifyContentCenter, {height: '92%'}]}>
          <MaterialCommunityIcons name="security-account-outline" size={250} color="#60c0f9" />
          <Text style={[s.h2, s.fontWeightBold, s.pb0, s.mb0, s.mt5, s.pt2]}>Tidak ada profil</Text>
          <Text>Buat akun dan dapatkan layanan terbaik kami.</Text>
          <TouchableOpacity 
            onPress={() => {Actions.auth()}}
            style={[s.bgSuccess, s.borderRounded, s.px3, s.py1, s.mt3]}>
            <Text style={[s.textWhite]}>MASUK ATAU DAFTAR DISINI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Profile
