// import { fetcher } from '@/lib/swr.fetcher.lib';
// import { Content } from '@/types/content.type';
// import { mutate } from 'swr';
// import useSWRImmutable from 'swr/immutable';

// const useContent = () => {
//   //   const { user } = useAuth();
//   const { data: content, isLoading } = useSWRImmutable(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}?page=1&query=office&client_id=Ff22f5zprsObQa_a7nGFfHiVja-s2ifGq6BWX3sCvF8`,
//     fetcher
//   );

//   const revalidate = () => {
//     if (content && content.length > 0) {
//       mutate(content);
//     }
//   };

//   return {
//     photos: content as Content[],
//     isLoading,
//     revalidate,
//   };
// };

// export default useContent;

// hooks/useContent.js

import { Content } from '@/types/content.type';
import { useEffect, useState } from 'react';

const useContent = () => {
  const [photos, setPhotos] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://api.unsplash.com/search/photos?page=1&query=outfit&client_id=Ff22f5zprsObQa_a7nGFfHiVja-s2ifGq6BWX3sCvF8'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPhotos(data.results);
      } catch (error) {
        setIsError(true);
        console.error('Fetching error:', error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { photos, isLoading, isError };
};

export default useContent;
