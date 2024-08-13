import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
export const fetchArticles = async (query, currentPage) => {
  const response = await axios.get("search/photos/", {
    params: {
      client_id: "WvpQUGKJ8p1GjzbRWgnVuaIYR9xZfCsQK3xlHajgvjE",
      page: currentPage,
      query: query,
      per_page: 6,
    },
  });
  return response.data.results;
};
