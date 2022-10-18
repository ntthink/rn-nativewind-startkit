import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Platform, Text, View } from "react-native";
import WelcomeScreen, { WelcomeScreen2 } from "../screens/tab1/WelcomeScreen";
import {IconHome, IconSearch, IconUser, IconPlus, IconMessage} from "../library/icons"

const Tab = createBottomTabNavigator();


export function BottomTabNav() {

  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "tab1":
              return <IconHome size={24} fill={color} />;

            case "tab2":
              return <IconSearch size={24} fill={color} />;
            // break;

            case "tab3":
              return <IconPlus size={24} fill={color} />;
            // break;

            case "tab4":
              return <IconMessage size={26} stroke={color} fill={focused ? color : "none"} />;
            // break;

            case "tab5":
              return <IconUser size={24} fill={color} />;
              // return user?.isLogin===true ? (
                //   <UserAvatar user={user} size={25} />
              // ) : <IconUser fill={color} size={20} />;
              // return <Text className={`text-lg ${focused ? 'text-primary' : 'text-dark-primary'}`}>P</Text>;
            // break;

            default: return false;
          }
        },
        tabBarActiveTintColor: "#DC0021",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F3F3F3",
          borderTopColor: "#DDD",
          paddingTop: 3,
          paddingBottom: Platform.OS === "android" ? 5 : 5,
          fontFamily: "GT-Eesti-Display-Medium",
          fontSize: 4
        },
        tabBarItemStyle: {
          paddingBottom: (Dimensions.get("screen").height>900 && Platform.OS==="ios") ? 15 : 0
        }
      })}
    >
      <Tab.Screen name="tab1" component={WelcomeScreen} options={{ tabBarLabel: "TAB 1" }}  />
      <Tab.Screen name="tab2" component={WelcomeScreen2} options={{ tabBarLabel: "TAB 2" }}  />
      <Tab.Screen name="tab3" component={WelcomeScreen} options={{ tabBarLabel: "TAB 3" }}  />
      <Tab.Screen name="tab4" component={WelcomeScreen2} options={{ tabBarLabel: "TAB 4" }}  />
      <Tab.Screen name="tab5" component={WelcomeScreen} options={{ tabBarLabel: "TAB 5" }}  />

    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();
export function RootNavigator() {


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabNav} />
      {/*<Stack.Group screenOptions={{ presentation: "transparentModal" }}>*/}
      {/*  */}
      {/*</Stack.Group>*/}
    </Stack.Navigator>
  )
}

