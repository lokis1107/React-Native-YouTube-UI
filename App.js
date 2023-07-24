import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "./data";
import ShortsCard from "./components/ShortsCard";
import MainCard from "./components/MainCard";

const App = () => {
  const [active, setActive] = useState("All");
  return (
    <View className="flex-1" style={{ backgroundColor: "#212121" }}>
      <StatusBar hidden />
      <SafeAreaView className="flex-row mx-4 justify-between">
        <View className="flex-row items-center mt-2">
          <Image
            source={require("./icons/youtubeIcon.png")}
            className="h-10 w-10"
          />
          <Text className="text-white font-semibold text-lg ml-1">Youtube</Text>
        </View>
        <View className="flex-row items-center mt-2 space-x-4">
          <Icon.Cast stroke={"white"} strokeWidth={1.2} height={"22"} />
          <Icon.Bell stroke={"white"} strokeWidth={1.2} height={"22"} />
          <Icon.Search stroke={"white"} strokeWidth={1.2} height={"22"} />
          <Image
            source={require("./images/avatar1.png")}
            className="h-7 w-7 rounded-full"
          />
        </View>
      </SafeAreaView>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              let isActive = item == active;
              let TextColor = isActive ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  key={index}
                  className="p-2 mt-5 px-4 mr-2 rounded-xl ml-2 "
                  style={{
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                  }}
                  onPress={() => setActive(item)}
                >
                  <Text className={TextColor}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View className="mt-5 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0">
          <View className="flex-row items-center px-4">
            <Image
              source={require("./icons/shortsIcon.png")}
              className="h-7 w-7"
            />
            <Text className="text-white font-semibold px-2 text-xl">
              Shorts
            </Text>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {shortVideos.map((item, index) => (
                <ShortsCard item={item} key={index} />
              ))}
            </ScrollView>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
          videos.map((item, index)=> <MainCard item={item} key={index} />)
        }
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default App;
