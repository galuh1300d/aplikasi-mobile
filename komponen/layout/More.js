import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const More = () => {
  return (
    <View>
      <Header>
        <Text style={[s.h5, s.textWhite]}>More</Text>
      </Header>
      <View style={[s.container, s.my2, s.ml2]}>
        <Text>Akun</Text>
      </View>
      <TouchableOpacity onPress={() => {Actions.auth()}} style={[s.body, s.py2, s.flexRow]}>
        <View style={[s.container, s.flexRow]}>
          <MaterialIcons style={[s.mr4, s.ml3]} name="person-outline" size={20} />
          <Text>Masuk</Text>
        </View>
        <View style={[s.alignItemsEnd]}>
          <FontAwesome style={[s.mr3]} name="angle-right" size={20} />
        </View>
      </TouchableOpacity>

      <View style={[s.container, s.my2, s.ml2, s.mt3]}>
        <Text>Tentang</Text>
      </View>
      <View style={[s.body, s.pt2, s.pb1, s.flexRow, s.mb1]}>
        <View style={[s.container, s.flexRow]}>
          <Image source={require('../assets/icon.png')} style={[{width: 30, height: 30}, s.mr3, s.ml2]}/>
          <Text>Tentang Senusa Care</Text>
        </View>
        <View style={[s.alignItemsEnd]}>
          <FontAwesome style={[s.mr3]} name="angle-right" size={20} />
        </View>
      </View>
      <View style={[s.body, s.py2, s.flexRow]}>
        <View style={[s.container, s.flexRow]}>
          <MaterialCommunityIcons style={[s.mr4, s.ml3]} name="file-document-box-multiple-outline" size={20} />
          <Text>Ketentuan Layanan</Text>
        </View>
        <View style={[s.alignItemsEnd]}>
          <FontAwesome style={[s.mr3]} name="angle-right" size={20} />
        </View>
      </View>

      <View style={[s.body, s.py2, s.flexRow, s.mb1, s.mt5]}>
        <View style={[s.container, s.flexRow]}>
          <MaterialCommunityIcons style={[s.mr4, s.ml3]} name="instagram" size={20} />
          <Text>Follow Kami di Instagram</Text>
        </View>
        <View style={[s.alignItemsEnd]}>
          <FontAwesome style={[s.mr3]} name="angle-right" size={20} />
        </View>
      </View>
      <View style={[s.body, s.py2, s.flexRow]}>
        <View style={[s.container, s.flexRow]}>
          <MaterialCommunityIcons style={[s.mr4, s.ml3]} name="google-play" size={20} />
          <Text>Nilai Kami di Playstore</Text>
        </View>
        <View style={[s.alignItemsEnd]}>
          <FontAwesome style={[s.mr3]} name="angle-right" size={20} />
        </View>
      </View>

      <View style={[s.alignItemsCenter, s.mt4]}>
        <Text>Senusa Care</Text>
        <Text>v1.0.0</Text>
      </View>
    </View>
  )
}

export default More
