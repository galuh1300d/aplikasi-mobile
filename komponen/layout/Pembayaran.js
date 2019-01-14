import React,{Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native'
import HeaderBackButton from './HeaderBackButton'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()


class Pembayaran extends Component {

  state = {
    date: `${moment(Date.now()).format('LL')}`,
    open: false,
    harga: 300000,
    uniqueCode: Math.floor(Math.random() * (100 - 20)) + 20
  }

  render() {
    console.log(this.state.date)
    return (
      <View style={[s.body, s.h100]}>
        <HeaderBackButton py={s.pb2}>
          <Text style={[s.h4, s.textWhite]}>Konfirmasi Pembayaran</Text>
        </HeaderBackButton>
        <ScrollView>
        <View style={[s.container]}>
          <Text style={[s.mt3, s.mb2]}>Lokasi dan Waktu Pemesanan</Text>
          <View style={[{backgroundColor: '#f2f2f2'},s.container, s.py3, s.borderRounded]}>
            <FontAwesome style={[s.ml2]} name="map-marker" size={20} />
          </View>
          <DatePicker
            style={[{backgroundColor: '#f2f2f2'},
            s.container, s.py2, s.mt1, s.w100, s.borderRounded]}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="LL"
            minDate="2016-05-01"
            maxDate="2020-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 10,
                marginLeft: 0,
                width: 23,
                height: 23
              },
              dateInput: {
                borderWidth: 0,
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />

          <Text style={[s.mt4, s.mb2]}>Detail Pembayaran</Text>
          <TouchableOpacity onPress={() => this.setState({open: !this.state.open})} 
          style={[{backgroundColor: '#f2f2f2'}, s.container, s.py3, s.flexRow, s.borderRounded]}>
            <Text style={[s.fontWeightBold, s.ml2, {width: '87%'}]}>Bank Transfer</Text>
            <Text style={[s.fontWeightBold]}>Pilih</Text>
          </TouchableOpacity>
          {this.state.open && 
            <View style={[{backgroundColor: '#f2f2f2'},s.container, s.py3, s.mt1, s.flexRow, s.borderRounded]}>
              <Image source={require('../assets/mandiri.png')} 
              style={[{width: 100, height: 50}]} />
              <View style={[s.ml3]}>
                <Text>Transfer ke :</Text>
                <Text>105-00-1193-758-2</Text>
                <Text>a.n. Yayasan Ernala Muara Asih Semesta</Text>
              </View>
            </View>
          }
          <View style={[{backgroundColor: '#f2f2f2'},s.container, s.py0, s.mt1, s.flexRow, s.borderRounded]}>
            <Entypo style={[s.ml2, {top: 11}]} name="price-tag" size={20} />
            <TextInput style={[s.ml2]} placeholder="Gunakan Kode Promo atau Kupon" />
          </View>
          <View style={[{backgroundColor: '#f2f2f2'}, s.container, s.py3, s.flexRow, s.mt1, s.borderRounded]}>
            <Text style={[s.ml2, {width: '75%'}]}>Sekolah Ibu Hamil</Text>
            <Text>Rp. {this.state.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
          </View>
          <View style={[{backgroundColor: '#f2f2f2'}, s.container, s.py3, s.flexRow, s.mt1, s.borderRounded]}>
            <Text style={[s.ml2, {width: '85%'}]}>Kode Unik</Text>
            <Text>Rp. {this.state.uniqueCode}</Text>
          </View>
          <View style={[{backgroundColor: '#f2f2f2'}, s.container, s.py3, s.flexRow, s.mt1, s.borderRounded]}>
            <Text style={[s.fontWeightBold, s.ml2, {width: '75%'}]}>Total Pembayaran</Text>
            <Text style={[s.fontWeightBold]}>
            Rp. {(this.state.harga + this.state.uniqueCode).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
          </View>
        </View>
        </ScrollView>
        <View 
        style={[s.borderTop, s.p3, {position: 'absolute', left: 0, right: 0, bottom: 0}]}>
          <TouchableOpacity 
          style={[{backgroundColor: '#f19dbe'}, s.py3, s.borderRounded, s.justifyContentCenter, s.alignItemsCenter]}>
            <Text style={[s.textWhite]}>PESAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Pembayaran