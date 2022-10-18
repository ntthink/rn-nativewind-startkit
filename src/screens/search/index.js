import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { memo, useState } from "react";
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from "../../library/element";
import { IconSearch } from "../../library/icons";
import { useColorScheme } from "nativewind";



const Stack = createNativeStackNavigator();
function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{presentation: "card"}}>
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
export default memo(SearchStack);


export const SearchBar = memo(({route, navigation}) => {

  const [value, setValue] = useState(false)

  return(
    <SafeAreaView className="h-full">
      <View className="bg-slate-100 flex-1">
        <Text className="text-slate-900 text-xl py-4 text-center">Aramaya başla</Text>
        <TextInput
          className="px-3 py-3 border border-solid border-slate-300 text-slate-900 mx-3 rounded"
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity
          disabled={!value || value?.length<5}
          className={`px-6 py-3 rounded-xl ${value?.length>4 ? "bg-primary" : "bg-slate-600"} mt-2 flex-row justify-center gap-x-2 mx-auto`}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SearchResult", {value})}
        >
          <>
              <IconSearch width={17} height={17} fill={"#fff"} />
              <Text className="text-slate-100">
                Ara
              </Text>
          </>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})


export const SearchResult = memo(({route, navigation}) => {

  const { colorScheme, toggleColorScheme } = useColorScheme();

  return(
    <SafeAreaView className="h-full">
      <View className="bg-slate-100 dark:bg-slate-900 flex-1 px-3">

        <View className="flex-row justify-between px-2">
          <TouchableOpacity
            className={`px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800/80 mt-2 flex-row justify-center gap-x-2`}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text className="text-slate-900 dark:text-slate-100">Geri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-3 rounded-full bg-slate-900 dark:bg-slate-800/80 mt-2 flex-row justify-center`}
            activeOpacity={0.8}
            onPress={toggleColorScheme}
          >
            <Text className="text-slate-100">{colorScheme!=="dark" ?  "🌙" : "🌞"}</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center">
          <Text className="text-slate-900 dark:text-light text-xl">Aramaya sonuçları</Text>
          <Text className="text-slate-500">{JSON.stringify(route?.params)}</Text>
        </View>



      </View>
    </SafeAreaView>
  )
})
