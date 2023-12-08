import { Image } from 'react-native';
import { Tabs } from 'expo-router';

import icons from '../../constants/icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Layout = () => {
    return (
    <Tabs
        screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0 }
        }}
    >
        <Tabs.Screen
            name="Home"
            options={{
                headerTitle: 'Home',
                tabBarIcon: ({color}) => (
                    <Image source={icons.home} resizeMode='cover' style={{ width: 25, height: 25, tintColor: color}} />
                )
            }}

        />
        <Tabs.Screen 
            name="Devices"
            options={{
                headerTitle: 'Devices',
                tabBarIcon: ({color}) => (
                    <Image source={icons.iot} resizeMode='cover' style={{width: 25, height: 25, tintColor: color}} />
                )
            }}
        />
        <Tabs.Screen 
            name="Energy"
            options={{
                headerTitle: 'Devices',
                tabBarIcon: ({color}) => (
                    <Image source={icons.energy} resizeMode='cover' style={{width: 25, height: 25, tintColor: color}} />
                )
            }}
        />
        <Tabs.Screen 
            name="WQI"
            options={{
                tabBarIcon: ({color}) => (
                    <Image source={icons.water} resizeMode='cover' style={{width: 25, height: 25, tintColor: color}} />
                )
            }}
        />
    </Tabs>
    );
}

export default Layout;