import I18n from 'react-native-i18n';
import en from './en';
import hi from './hi';

I18n.fallbacks = true;

I18n.translations = {
  "en": en,
  "hi": hi
}

console.log("Ola Strings: ", I18n.translations);

export default I18n;