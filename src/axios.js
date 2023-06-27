import axios from "axios";

const token = localStorage.getItem("accessToken");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
