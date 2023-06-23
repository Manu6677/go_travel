import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-8 items-center space-x-2 ">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}

      <View className="px-6 mt-1 space-y-1">
        <Text className="text-[#3c6072] text-[40px]">Enjoy the trip with </Text>
        <Text className="text-[#00bcc9] text-[37px] -ml-0 font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3c6072] text-base">
          It is a long established fact that a reader will be distracted by the
          readable content
        </Text>
      </View>

      {/*Circle Section*/}
      <View className="h-[400px] w-[400px] bottom-14 -right-48 rounded-full absolute bg-[#00BCC9]"></View>
      <View className="h-[400px] w-[400px] -bottom-28 -left-52 rounded-full absolute bg-[#E99265]"></View>

      {/*Image Container */}
      <View className="flex-1 items-center relative justify-center">
        <Animatable.Image
          animation={"fadeIn"}
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-7"
        />

        {/* Go section */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-16 w-24 h-24 items-center border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 bg-[#00BCC9] rounded-full items-center justify-center border-[#00BCC9]"
          >
            <Text className="font-semibold text-gray-50 text-[36px]">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
