import React, {memo} from "react"
import { Pressable, Text as RNText, View as RNView } from "react-native";
import { styled } from "nativewind";

const View = styled(RNView);
const Text = styled(RNText);

const WelcomeScreen = memo(({route, navigation}) => {

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg text-primary">Welcome</Text>
      <Pressable className="bg-primary rounded-xl px-3 py-3" onPress={() => navigation.navigate("tab2")}>
        <Text className="text-light">GO Welcome2</Text>
      </Pressable>
    </View>
  );
})

export const WelcomeScreen2 = memo(({route, navigation}) => {

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg text-dark-primary">Welcome2</Text>
    </View>
  );
})

export default WelcomeScreen;
