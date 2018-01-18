import I18n from "react-native-i18n";
import en from "./en";
import hi from "./hi";

console.log("locale is ", I18n.currentLocale())
console.log("locale is ", I18n.locales)

I18n.fallbacks = true;

I18n.translations = {
  "en": en,
  "hi": hi
}

console.log("HELLO: ", I18n.translations);

export default I18n 