import React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


function HomeScreen({ navigation }) {
  return (       
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFFFFFF" }}>
      
      <Icon.Button name="ios-menu" size={25} color="black" 
      backgroundColor = "#FFFFFFF" onPress={()=> navigation.openDrawer()}></Icon.Button>

      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Add a New Goal"
      />
    </View>
  );
}

function NewGoalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        {/* <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back home"
        /> */}
      </View>
    );
  }

function CompletedGoalsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {/* <Button
          onPress={navigation.openDrawer}
          title="Open navigation drawer"
        />
        <Button
          onPress={() => navigation.goBack()}
          title="Go back home"
        /> */}
      </View>
    );
  }

export default function App() {
  return (
    <NavigationContainer>
      {/* <Image source="https://img.icons8.com/android/24/000000/menu.png" style={{width: 100}}/> */}
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NewGoalScreen} />
        <Drawer.Screen name="Completed Goals" component={CompletedGoalsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}