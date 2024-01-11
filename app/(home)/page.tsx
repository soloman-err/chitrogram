'use client';
import Image1 from '@/assets/092ebfcb416368ccae23a615aa94243e.jpg';
import Image2 from '@/assets/c2e48fba9d04711d42530e70a17e29ff.jpg';
import Image3 from '@/assets/d7a2b6952aaa598753f726af2fcabf2e.jpg';
import Image4 from '@/assets/dfbf78b080b211668847164f33ef7e36.jpg';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

const images = [Image1, Image2, Image3, Image4];

export default function Home() {
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
        {images?.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt="image"
              width={600}
              height={600}
              key={index}
              placeholder="blur"
            />
          </div>
        ))}
      </Masonry>
    </main>
  );
}
