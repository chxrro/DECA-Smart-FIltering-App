import { Stack } from 'expo-router'

const Layout = () => {
    return (
    <Stack>
        <Stack.Screen name="(tabs)" 
            options={{
                headerShadowVisible: false,
                headerTitle: '',
                headerStyle: { backgroundColor: 'black' },
                
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