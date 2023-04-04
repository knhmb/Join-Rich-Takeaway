import { createI18n } from "vue-i18n";
import en from "@/locale/en.json";
import zh from "@/locale/zh.json";

const i18n = createI18n({
  locale: "en",
  allowComposition: true, // you need to specify that!
  messages: {
    en: en,
    zh: zh,
  },
});

export default i18n;
