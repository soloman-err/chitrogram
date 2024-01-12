export const fetchContent = async (query: string, page: number) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
