import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

import HealthViewComp from '../../components/home/healthViewComp'

const Devices = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <View>
        <Stack.Screen 
          options={{
            headerShown:false
          }}
        />
        <ScrollView>
          <Text style={styles.accent}>ALL FILTERS</Text>
          <HealthViewComp 
          filterName={'07AD'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'27'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'16YS'} isGood={true} onlineStatus={'ONLINE'} statusColor={'green'} 
          filterEff={'99'} filterEffColor={'green'} filterLife={'87'} filterLifeColor={'green'} />
          <HealthViewComp 
          filterName={'89AS'} isGood={true} onlineStatus={'ONLINE'} statusColor={'green'} 
          filterEff={'87'} filterEffColor={'green'} filterLife={'27'} filterLifeColor={'#EAA205'} />
          <HealthViewComp 
          filterName={'78RT'} isGood={true} onlineStatus={'ONLINE'} statusColor={'green'} 
          filterEff={'96'} filterEffColor={'green'} filterLife={'74'} filterLifeColor={'green'} />
          <HealthViewComp 
          filterName={'92DA'} isGood={true} onlineStatus={'ONLINE'} statusColor={'green'} 
          filterEff={'87'} filterEffColor={'green'} filterLife={'58'} filterLifeColor={'#EAA205'} />
          <HealthViewComp 
          filterName={'94SN'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'51'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'03FD'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'51'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'02DD'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'27'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'65UI'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'27'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'24BL'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'27'} filterLifeColor={'red'} />
          <HealthViewComp 
          filterName={'23AA'} isGood={false} onlineStatus={'OFFLINE'} statusColor={'red'} 
          filterEff={'66'} filterEffColor={'#EAA205'} filterLife={'27'} filterLifeColor={'red'} />

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Devices

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  accent: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
})