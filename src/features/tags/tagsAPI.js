import axios from "../../utils/axios";

export const fetchTags = async () => {
  const response = await axios.get("/tags");
  return response.data;
};
