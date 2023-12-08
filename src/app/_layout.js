import { Stack } from 'expo-router'
import { Image } from 'react-native';

import icons from '../constants/icons'

 
const Layout = () => {
    return (
    <Stack>
        <Stack.Screen name="(tabs)" 
            options={{
                headerShadowVisible: false,
                headerTitle: '',
                headerStyle: { backgroundColor: 'white' },
                headerLeft: () => (
                    <Image source={icons.menu} style={{width: 25, height: 25, marginLeft: 5}} resizeMode="cover" />
                ),
                headerRight: () => (
                    <Image source={icons.profile} style={{width: 25, height: 25, marginRight: 5}} resizeMode='cover'/>
                )
            }}
        />
    </Stack> 
    )
}

export default Layout;

/* <Stack.Screen name="main" options={{
                headerShadowVisible: false,
                headerTitle: '',
                headerStyle: { backgroundColor: theme.backgroundColor },
                headerLeft: () => (
                    <Image source={images.khs} style={{width: 40, height: 40}} resizeMode="cover" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtnProfile iconUrl={images.profilepic} dimension={"80%"} page="common/profile"/>
                )
                }}/> */