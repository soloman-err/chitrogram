'use client';
import { Content } from '@/types/content.type';
import { useEffect, useState } from 'react';

const useContent = () => {
  const [photos, setPhotos] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${page}&query=mustang&client_id=Ff22f5zprsObQa_a7nGFfHiVja-s2ifGq6BWX3sCvF8`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        setIsError(true);
        console.error('Fetching error:', error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  return { photos, isLoading, isError, setPage };
};

export default useContent;
