'use client';
import Spinner from '@/assets/bars-rotate-fade.svg';
import { fetchContent } from '@/hooks/useContent';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';

let page = 1;
let query = 'mustang';

const LoadContent = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any>([]);
  console.log(data);

  useEffect(() => {
    if (inView) {
      fetchContent(query, page).then((res) => {
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

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.5,
                ease: 'easeInOut',
                duration: 0.5,
              }}
              viewport={{ amount: 0 }}
            >
              <Image
                src={image?.urls?.raw}
                alt={image?.alt_description}
                width={400}
                height={400}
                placeholder="blur"
                blurDataURL={image?.urls?.raw}
              />
            </motion.div>
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
