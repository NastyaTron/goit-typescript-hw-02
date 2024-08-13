import axios from "axios";
import { UnsplashResult } from "../src/types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export async function fetchImages(
  query: string,
  currentPage: number
): Promise<UnsplashResult> {
  const response = await axios.get<UnsplashResult>("search/photos/", {
    params: {
      client_id: "WvpQUGKJ8p1GjzbRWgnVuaIYR9xZfCsQK3xlHajgvjE",
      page: currentPage,
      query: query,
      per_page: 6,
    },
  });
  return response.data;
}
