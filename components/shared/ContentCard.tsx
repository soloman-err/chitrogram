import { ContentCardProps } from '@/types/content.type';
import { motion } from 'framer-motion';
import Image from 'next/image';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ContentCard: React.FC<ContentCardProps> = ({ image, index }) => {
  return (
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
      />
    </motion.div>
  );
};

export default ContentCard;
