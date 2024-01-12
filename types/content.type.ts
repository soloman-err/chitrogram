export type Content = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: string[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: object;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: object;
  topic_submissions: [];
  tags: [];
};

export type ImageData = {
  urls: {
    raw: string;
  };
  alt_description: string;
};

export type ContentCardProps = {
  index: number;
  image: {
    urls: {
      [x: string]: string | StaticImport;
      raw: string;
    };
    alt_description: string;
  };
};
