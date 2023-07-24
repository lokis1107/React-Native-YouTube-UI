import { View, Text, Image } from "react-native";
import React from "react";

const MainCard = ({ item }) => {
  return (
    <View>
      <Image source={item.thumbnail} className=" h-56 mt-2 w-full" />
      <View className="flex mr-2 mb-5 justify-end items-end -mt-8">
        <View className="p-1 bg-black rounded">
          <Text className="text-white font-semibold">{item.duration}</Text>
        </View>
      </View>
      <View className="flex-row">
        <Image source={item.avatar} className="h-14 w-14 rounded-full ml-3" />
        <View>
          <Text className="text-white ml-2 font-bold mt-1">{item.title}</Text>
          <View className="flex-row ml-2 items-center">
            <Text className="-mt-5 text-gray-300">{item.channelTitle}</Text>
            <Text className="text-gray-300 ml-1 mb-5">
              {item.viewCount} Views
            </Text>
            <Text className=" text-gray-300 -mt-5 ml-1">
              {item.publishedText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCard;
