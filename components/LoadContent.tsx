'use client';
import Spinner from '@/assets/bars-rotate-fade.svg';
import { fetchContent } from '@/hooks/useContent';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';

let page = 2;

const LoadContent = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any>([]);
  console.log(data);

  useEffect(() => {
    if (inView) {
      fetchContent(page).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView]);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map(
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
                placeholder="blur"
                blurDataURL={image?.urls?.raw}
              />
            </div>
          )
        )}
      </Masonry>
      <div ref={ref} className="flex justify-center my-2">
        <Image src={Spinner} alt="spinner" />
      </div>
    </>
  );
};

export default LoadContent;
