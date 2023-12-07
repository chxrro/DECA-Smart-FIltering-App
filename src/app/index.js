import { StyleSheet, Text, View, TouchableOpacity, Touchable } from "react-native";
import { Stack ,useRouter } from "expo-router";


export default function Page() {
  const router = useRouter();
  
  const handlePress = () => {
    router.replace("(tabs)/Home")
  }
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>EcoGuard.</Text>
        <TouchableOpacity onPress={handlePress}> 
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
