import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
      data={[{ id: 1  }]}
      keyExtractor= {(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl">{item.id}</Text>
      )}
      ListHeaderComponent={() => (
        <View className="my-6 px-4 space-y-6" ></View>
      )}
      />
    </SafeAreaView>
  )
}

export default Home