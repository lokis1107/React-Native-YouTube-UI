import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ShortsCard = ({item}) => {
  return (
    <View className="h-64 w-40 relative mr-3 justify-between">
      <Image source={item.image} className="h-full w-full rounded-2xl absolute ml-4"/>
      <View className="p-2 mt-44">
        <Text className="text-white font-semibold px-3">{item.title}</Text>
        <Text className="text-white px-3">{item.viewCount} viewers</Text>
      </View>
    </View>
  )
}

export default ShortsCard