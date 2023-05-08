import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import tailwind from 'twrnc';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    },
];

const NavFavourites = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View
            style={[tailwind`bg-gray-200`, { height: 0.5 }]}
            />
        )}
        renderItem={({ item: { location, destination, icon } }) => (
            <TouchableOpacity style={tailwind`flex-row items-center p-5`}>
                <Icon
                    style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tailwind`font-semibold text-lg`}>{location}</Text>
                    <Text style={tailwind`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})