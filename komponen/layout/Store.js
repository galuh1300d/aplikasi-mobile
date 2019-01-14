import React from 'react'
import {Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import HeaderSearch from './HeaderSearch'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Store = () => {
  return (
    <View>
      <HeaderSearch py={s.pb2} placeholder="Cari nama produk">
        <Text style={[s.h4, s.textWhite ]}>Store</Text>
      </HeaderSearch>
      <ScrollView style={[s.body]}>
      <View style={[s.flexRow, s.justifyContentCenter, s.my1, s.mt2]}>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/folamil.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>FOLAMIL GENIO 30 KAPSUL</Text>
          <Text style={[s.mb2]}>Rp. 118.000</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/neurodex.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>NEURODEX 10 TABLET</Text>
          <Text style={[s.mb2]}>Rp. 4.800</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[s.flexRow, s.justifyContentCenter, s.my2]}>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/vitacimin.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>VITACIMIN 500 MG 2 TABLET</Text>
          <Text style={[s.mb2]}>Rp. 1.100</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/sangobion.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>SANGOBION 10 KAPSUL</Text>
          <Text style={[s.mb2]}>Rp. 8.000</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[s.flexRow, s.justifyContentCenter, s.my1, s.mt2]}>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/folamil.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>FOLAMIL GENIO 30 KAPSUL</Text>
          <Text style={[s.mb2]}>Rp. 118.000</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/neurodex.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>NEURODEX 10 TABLET</Text>
          <Text style={[s.mb2]}>Rp. 4.800</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[s.flexRow, s.justifyContentCenter, s.my2]}>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/vitacimin.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>VITACIMIN 500 MG 2 TABLET</Text>
          <Text style={[s.mb2]}>Rp. 1.100</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.alignItemsCenter, s.p4, s.mx2, {backgroundColor: '#f2f2f2', width: '45%'}]}>
          <Image style={[{width: 60, height: 90}, s.m3]} 
            source={require('../assets/store/sangobion.png')} />
          <Text style={[s.h6, s.fontWeightBold, s.textCenter]}>SANGOBION 10 KAPSUL</Text>
          <Text style={[s.mb2]}>Rp. 8.000</Text>
          <TouchableOpacity style={[s.btn, s.btnDanger, s.py1, s.px3, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>BELI</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[s.m5, s.p3]}></View>
      </ScrollView>
    </View>
  )
}

export default Store
