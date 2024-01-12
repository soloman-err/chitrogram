export const fetchContent = async (page: number) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=mustang&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
