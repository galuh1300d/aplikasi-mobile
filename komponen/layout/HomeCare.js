import React from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import HeaderBackButton from './HeaderBackButton'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()


const HomeCare = () => {
  return (
    <View>
      <HeaderBackButton py={s.pb2}>
        <Text style={[s.h4, s.textWhite ]}>Home Care</Text>
      </HeaderBackButton>
      <View style={[s.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => {Actions.homeCareInfo()}} style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>Sekolah Ibu Hamil</Text>
            <Text>Rp. 300.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/20.jpg'}} />
          </View>
        </TouchableOpacity>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Exercise (Yoga, Senam & Tarian Persalinan)
            </Text>
            <Text>Rp. 200.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/19.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Kelas Persiapan Persalinan
            </Text>
            <Text>Rp. 1.000.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/18.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Reposisi Letak Sungsang, Lintang & Lilitan Tali Pusat
            </Text>
            <Text>Rp. 300.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/17.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Pendamping Persalinan
            </Text>
            <Text>Rp. 1.000.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/16.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Perawatan Nifas & Newborn
            </Text>
            <Text>Rp. 150.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/15.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Konselor ASI & Treatment Payudara
            </Text>
            <Text>Rp. 150.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/14.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Treatment Baby Message & Baby Spa
            </Text>
            <Text>Rp. 100.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/13.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Rawat Sakit
            </Text>
            <Text>Rp. 150.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/women/12.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Rawat Lansia
            </Text>
            <Text>Rp. 150.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/men/19.jpg'}} />
          </View>
        </View>

        <View style={[s.body, s.flexRow, s.p3, s.my2]}>
          <View style={[{width: '85%'}]}>
            <Text style={[s.h5, s.fontWeightBold]}>
            Rawan Luka
            </Text>
            <Text>Rp. 200.000</Text>
          </View>
          <View style={[s.alignItemsEnd]}>
            <Image style={[{width: 60, height: 80}]} 
            source={{uri: 'https://randomuser.me/api/portraits/men/14.jpg'}} />
          </View>
        </View>
        
        <View style={[s.m5, s.p3]}></View>

      </ScrollView>
      </View>
    </View>
  )
}

export default HomeCare
