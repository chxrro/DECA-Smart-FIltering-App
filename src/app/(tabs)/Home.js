import { View, Text,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen 
        options={{
            headerShown: false,
            headerTitle: ''
        }}
         />
        <View>
            <Text style={styles.title}>Home</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 40,
        marginTop: 30,
    },
})

export default home