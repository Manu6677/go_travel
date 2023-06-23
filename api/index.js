import axios from "axios";

export const getPlacesData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.15543993776612",
          tr_latitude: "25.41257834546226",
          bl_longitude: "51.39587210719369",
          tr_longitude: "51.62812119686502",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "52c1c51d5emsh1dfc172c7d94e07p17b6f7jsnfccba7248544",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return error;
  }
};
