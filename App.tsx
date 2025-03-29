import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function HomeScreen(props: any) {

    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginBottom: 10 }}>
          <Button
            title='Go to Detail'
            onPress={() => navigation.navigate('Details')} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button
            title='Go user 1'
            onPress={() => navigation.navigate('Details', { userId: 1, name: "Sang" })} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button
            title='Go user 2'
            onPress={() => navigation.navigate('Details', { userId: 2, name: "Nguyen" })} />
        </View>
      </View>
    );
  }

  function DetailsScreen() {
    const navigation: any = useNavigation();
    const route: any = useRoute();
    console.log(">>Check route:", route);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen </Text>
        <Text>User Id = {route?.params?.userId}</Text>
        <Button
          title='Back to Home'
          onPress={() => navigation.goBack()} />
      </View>

    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({ headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}` })} />
      </Stack.Navigator> */}


      {/* <Drawer.Navigator initialRouteName="Feed">

        <Drawer.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            drawerLabel: "Trang chủ",
            headerTitle: "Trang chủ"
          }}
        />
        <Drawer.Screen
          name="Article"
          component={DetailsScreen}

        />
      </Drawer.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'analytics'
                : 'analytics-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'american-football' : 'american-football-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;