import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="Login" options={{ title: "Login" }} />
    </Tabs>
  );
}
