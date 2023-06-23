<View className="flex-row items-center mt-3 justify-evenly flex-wrap">
  {mainData.length > 0 ? (
    <>
      {mainData?.map((data, i) => {
        <ItemCardContainer
          key={i}
          imageSrc={
            data?.photo?.images?.medium?.url
              ? data?.photo?.images?.medium?.url
              : "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
          }
          title={data?.name}
          location={data?.location_string}
        />;
      })}
    </>
  ) : (
    <>
      <View className="w-full h-[300px] items-center justify-center">
        <Image source={NotFound} className="w-32 h-32 object-cover" />
        <Text className="text-2xl text-[#428288] font-semibold">
          Opps...No Data Found
        </Text>
      </View>
    </>
  )}
</View>;
