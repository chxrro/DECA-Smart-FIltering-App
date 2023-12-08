import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'
import React from 'react'

import images from '../../constants/images'

const SustainabilityRepComp = () => {
  return (
    <SafeAreaView style={styles.bgBox}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
            Sustainability Report
        </Text>
        <View style={styles.marginyes}>
        <View style={styles.row}>
          <Image source={images.circleprogress} resizeMode='cover' style={styles.image}/>
          <View>
            <Text style={styles.statText}>PH Levels</Text>
            <Text style={styles.statMainText}>7.0</Text>
            <Text style={styles.statTextend}>Pollutant</Text>
            <Text style={styles.statTextnoTop}>Levels</Text>
            <Text style={styles.statMainText2}>2.58μ/L</Text>
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SustainabilityRepComp;

const styles = StyleSheet.create({
    bgBox: {
        backgroundColor: '#77EA80',
        width: '93%',
        height: 300,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 8,
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 70,
    },
    image: {
      height : 325,
      width: 325,
      marginTop: -45,
      marginRight: -15,
      marginLeft: -60
      
    },
    container:{
      padding: 15,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 0,
    },
    statText:{
      fontSize: 15,
      fontWeight: '600',
      color: 'white',
      marginTop: 15,
      marginLeft: -25
    },
    statTextend:{
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      marginTop: 35,
      marginLeft: -22,
    },
    statTextnoTop:{
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      marginLeft: -22,
    },
    statMainText: {
      fontSize: 45,
      fontWeight: '800',
      color: 'white',
      marginLeft: -20,
    },
    statMainText2: {
      fontSize: 25,
      fontWeight: '800',
      color: 'white',
      marginRight: 20,
      marginLeft: -23
      
  
    },
})