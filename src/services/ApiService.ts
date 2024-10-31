const BASE_URL = process.env.REACT_APP_API_URL;

export const ApiService = {
  getArtworks: async (page = 1) => {
    const response = await fetch(`${BASE_URL}/artworks?page=${page}`);
    const data = await response.json();
    return data;
  },
  getArtists: async () => {
    const response = await fetch(`${BASE_URL}/artists`);
    const data = await response.json();
    return data;
  },
  getExhibitions: async () => {
    const response = await fetch(`${BASE_URL}/exhibitions`);
    const data = await response.json();
    return data;
  },
  searchArtworks: async (query: string) => {
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    const data = await response.json();
    return data;
  },
};
