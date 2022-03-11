import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "SummaryNotesRegular" : require("../assets/fonts/SummaryNotesRegular-Ea5ln.ttf"),
      // All other fonts here
    });
};