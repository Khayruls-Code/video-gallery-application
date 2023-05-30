import axios from "../../utils/axios";

export const fetchVideos = async () => {
  const response = await axios.get("/videos");
  return response.data;
};
