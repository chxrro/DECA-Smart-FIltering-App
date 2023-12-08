import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import icons from '../../constants/icons'


const HealthViewComp = (props) => {
    let filterStatus = 'filterDOWN'
    if(props.isGood == true){
        filterStatus='filterUP'
    }

    const styles = StyleSheet.create({
        bgBox: {
            backgroundColor: '#CEE0EA',
            width: '93%',
            alignSelf: 'center',
            borderRadius: 15,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15 ,
        },
        mainText: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
        },
        secondaryText:{
            fontSize: 15,
            fontWeight: '300',
            color: 'grey',
        },
        secondaryInfo: {
            fontSize: 15,
            fontWeight: '700',
            marginLeft: 2,
            color: props.filterEffColor
        },
        secondaryInfoNormal: {
            fontSize: 15,
            fontWeight: '700',
            marginLeft: 2,
            color: props.statusColor
        },
        secondaryInfoLife:{
            fontSize: 15,
            fontWeight: '700',
            marginLeft: 2,
            color: props.filterLifeColor
        },
        row:{
            flexDirection: 'row',
        }
    
    
    })

  return (
    <View style={styles.bgBox}>
      <View>
        <Text style={styles.mainText}>Filter {props.filterName}</Text>
        <View style={styles.row}>
            <Text style={styles.secondaryText}>Filter Status:</Text>
            <Text style={styles.secondaryInfoNormal}>{props.onlineStatus}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.secondaryText}>Filter Efficiency:</Text>
            <Text style={styles.secondaryInfo}>{[props.filterEff]}%</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.secondaryText}>Filter life:</Text>
            <Text style={styles.secondaryInfoLife}>{props.filterLife}%</Text>
        </View>
      </View>
    <View>
        <Image source={icons[filterStatus]} resizeMode='cover' style={{justifyContent: 'center'}}/>
    </View>
      

    </View>
  )
}

export default HealthViewComp;

