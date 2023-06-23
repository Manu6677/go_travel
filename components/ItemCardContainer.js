import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Avatar } from "../assets";

const ItemCardContainer = ({ title, location, imageSrc, data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      className="rounded-md shadow-lg border w-36 border-gray-300 px-1 py-2 bg-white"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-32 object-cover rounded-lg"
      />

      <Text className="font-bold text-[18px] text-[#428288]">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className="flex-row items-center space-x-2">
        <FontAwesome name="map-marker" size={20} color="#6597A2" />
        <Text className="font-bold text-[14px] text-[#428288]">
          {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
