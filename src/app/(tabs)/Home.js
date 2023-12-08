import { View, Text,SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

import HealthViewComp from '../../components/home/healthViewComp'
import SustainabilityRepComp from '../../components/home/sustainabilityRepComp'


const home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen 
        options={{
            headerShown: false,
            headerTitle: ''
        }}
         />
        <ScrollView>
          <Text style={styles.accent1}>SUMMARY</Text>
          <SustainabilityRepComp />
          <View>
              <Text style={styles.accent}>NEEDS ACTION</Text>
          </View>
          <View>
            <HealthViewComp filterName={'10B6'}/>
            <HealthViewComp filterName={'14B8'}/>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 30,
        marginTop: 10,
    },
    accent: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    accent1: {
      color: 'grey',
      fontSize: 15,
      fontWeight: '400',
      marginLeft: 20,
    },
    statusContainer: {
      height: '55%',
    }

})

export default home