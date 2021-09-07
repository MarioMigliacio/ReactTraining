import axios from "axios";

const KEY = "AIzaSyDHuCW6yWJEg-F7Q-PS0WfVd2eUzlKLMtM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});