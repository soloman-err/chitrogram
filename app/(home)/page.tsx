'use client';
import useContent from '@/hooks/useContent';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import useSWRInfinite from 'swr/infinite';

const getKey = (pageIndex: number, previousPageData: string | any[]) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `https://api.unsplash.com/search/photos?page=${
    pageIndex + 1
  }&limit=10&query=office&client_id=Ff22f5zprsObQa_a7nGFfHiVja-s2ifGq6BWX3sCvF8`;
};

export default function Home() {
  const { photos } = useContent();

  const { data, error, size, setSize } = useSWRInfinite(getKey);

  // const photos = data ? [].concat(...data) : [];
  console.log(photos);
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 10);

  const breakpointColumnsObj = {
    default: 6,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <main className="container rounded-xl bg-dark/5 p-2 md:p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos?.map(
          (
            image: { urls: { raw: string }; alt_description: string },
            index: number
          ) => (
            <div key={index}>
              <Image
                src={image?.urls?.raw}
                alt={image?.alt_description}
                width={400}
                height={400}
                key={index}
                // placeholder="blur"
                // blurDataURL={image?.urls?.raw}
              />
            </div>
          )
        )}
      </Masonry>
    </main>
  );
}
