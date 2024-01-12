'use client';
import useContent from '@/hooks/useContent';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

export default function Home() {
  const { photos } = useContent();
  console.log('from homepage', photos);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <main className="container rounded-xl bg-dark/5 p-2 md:p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos?.map((image, index) => (
          <div key={index}>
            <Image
              src={image?.urls?.raw}
              alt={image?.alt_description}
              width={600}
              height={600}
              key={index}
              blurDataURL="blur"
            />
          </div>
        ))}
      </Masonry>
    </main>
  );
}
