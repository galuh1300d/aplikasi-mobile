import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import HeaderBackButton from './HeaderBackButton'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux';

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()


const HomeCareInfo = () => {
  return (
    <View style={[s.body, s.h100]}>
      <HeaderBackButton py={s.pb2}>
        <Text style={[s.h4, s.textWhite]}>Sekolah Ibu Hamil</Text>
      </HeaderBackButton>
      <View style={[s.container]}>
        <Text style={[s.textJustify,s.mt2, s.mb3]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio delectus fugiat quae architecto:</Text>
        <View style={[s.mb4, s.mx2]}>
          <View style={[s.flexRow]}>
            <Text style={[s.mr1]}>1.</Text>
            <Text style={[s.textJustify]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam optio temporibus cumque harum labore itaque voluptate assumenda cum</Text>
          </View>
          <View style={[s.flexRow]}>
            <Text style={[s.mr1]}>2.</Text>
            <Text style={[s.textJustify]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam optio temporibus cumque harum labore itaque voluptate assumenda cum</Text>
          </View>
          <View style={[s.flexRow]}>
            <Text style={[s.mr1]}>3.</Text>
            <Text style={[s.textJustify]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam optio temporibus cumque harum labore itaque voluptate assumenda cum</Text>
          </View>
          <View style={[s.flexRow]}>
            <Text style={[s.mr1]}>4.</Text>
            <Text style={[s.textJustify]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam optio temporibus cumque harum labore itaque voluptate assumenda cum</Text>
          </View>  
        </View>
        </View>
        <Text style={[s.container]}>Durasi 120 menit</Text>
      <View style={[s.borderTop, s.py3, s.flexRow, {position: 'absolute', left: 0, right: 0, bottom: 0}]}>
        <View style={[s.ml3, s.py0, {width: '60%'}]}>
          <Text style={[s.fontWeightBold, s.py0]}>Total Harga</Text>
          <Text style={[s. fontWeightBold, s.textPrimary, s.py0]}>Rp. 300.000</Text>
        </View>
        <TouchableOpacity onPress={() => {Actions.pembayaran()}} style={[s.bgPrimary, s.borderRounded, s.justifyContentCenter, s.px5]}>
          <Text style={[s.textWhite]}>LANJUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeCareInfo
