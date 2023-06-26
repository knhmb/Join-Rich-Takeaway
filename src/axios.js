import axios from "axios";
import i18n from "./i18n";

const token = localStorage.getItem("accessToken");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.common["accept-language"] = i18n.global.locale;
