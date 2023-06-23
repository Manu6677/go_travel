import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 mt-4 bg-white relative">
      <ScrollView className="flex-1 px-4 py-5">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            className="w-full h-56 object-cover rounded-2xl"
          />

          <View className="absolute inset-x-0 justify-between px-5 py-3 flex-row">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="bg-white rounded-md w-10 h-10 items-center justify-center"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#06B2BE] w-10 h-10 rounded-md items-center justify-center">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between inset-x-0 px-4 absolute bottom-4">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[17px] font-bold text-gray-100">
                {data?.price_level}
              </Text>
              <Text className="text-[32px] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>

            <Text className="bg-teal-100 rounded-md px-2 py-1">
              {data?.open_now_text}
            </Text>
          </View>
        </View>

        <View className="mt-3 pl-2">
          <Text className="text-[#428288] font-bold text-[24px]">
            {data?.name}
          </Text>
          <View className="flex-row space-x-2">
            <FontAwesome name="map-marker" size={28} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-2">
          {data?.rating && (
            <View className="flex-row justify-center space-x-2">
              <View className="items-center justify-center bg-red-300 rounded-md w-11 h-11">
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {data?.rating}
                </Text>
                <Text className="text-[#515151] capitalize">Ratings</Text>
              </View>
            </View>
          )}

          <View className="flex-row items-center justify-between mt-3">
            {data?.price_level && (
              <View className="flex-row justify-center space-x-2">
                <View className="items-center justify-center bg-red-300 rounded-md w-11 h-11">
                  <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151] capitalize">
                    {data?.price_level}
                  </Text>
                  <Text className="text-[#515151] capitalize">Price Level</Text>
                </View>
              </View>
            )}
          </View>

          <View className="flex-row items-center justify-between mt-3">
            {data?.bearing && (
              <View className="flex-row justify-center space-x-2">
                <View className="items-center justify-center bg-red-300 rounded-md w-11 h-11">
                  <FontAwesome5 name="map-signs" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151] capitalize">
                    {data?.bearing}
                  </Text>
                  <Text className="text-[#515151] capitalize">Bearing</Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {data?.description && (
          <Text className="mt-3 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center mt-2 flex-wrap justify-start">
            {data?.cuisine.map((item) => (
              <TouchableOpacity key={item.key}>
                <Text className="bg-emerald-100 px-2 py-1">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="bg-gray-100 mt-2 space-y-1 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}

          {data?.email && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}

          {data?.address && (
            <View className="flex-row items-center space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}
        </View>

        <View className="mt-2 px-2 py-2 items-center justify-center mb-12 bg-[#06B2BE] rounded-lg cursor-pointer">
          <Text className="text-3xl font-semibold uppercase tracking-wide text-gray-100">
            Book Now
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
