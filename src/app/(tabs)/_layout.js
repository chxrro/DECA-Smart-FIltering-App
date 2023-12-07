import { Image } from 'react-native';
import { Tabs } from 'expo-router';


const Layout = () => {
    return (
    <Tabs 
        screenOptions={{
            headerStyle: { backgroundColor: 'black' },
            tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 }
        }}
    >
        <Tabs.Screen
            name="Home"
            options={{
                headerTitle: 'Home',
            }}
        />
    </Tabs>
    );
}

export default Layout;