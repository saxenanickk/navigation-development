import I18n from "react-native-i18n";
import en from "./en";
import hi from "./hi";

console.log("locale is ", I18n.currentLocale())

I18n.fallbacks = true;

I18n.translations = {
  "en": en,
  "hi": hi
}

export default I18n 