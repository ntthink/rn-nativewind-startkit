import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/ref";
import {RootNavigator} from "./src/navigation/navigation";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      independent={true}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
