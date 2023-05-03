import axios from 'axios';

export interface UnsplashAPIData {
  id: string;
  created_at: string;
  updated_at: string;
  // promoted_at: string;
  width: number;
  height: number;
  color: string;
  // blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    // raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    // small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  // // liked_by_user: boolean;
  user: {
    id: string;
    // updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string | null;
    // twitter_username: string | null;
    // portfolio_url: string;
    // bio: string | null;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      // likes: string;
      // portfolio: string;
      // following: string;
      // followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    // instagram_username: string;
    // total_collections: number;
    // total_likes: number;
    // total_photos: number;
    // accepted_tos: boolean;
    // for_hire: boolean;
    // social: {
    //   instagram_username: string;
    //   portfolio_url: string;
    //   twitter_username: string | null;
    //   paypal_email: string | null;
    // };
  };
  // exif: {
  //   make: string;
  //   model: string;
  //   name: string;
  //   exposure_time: string;
  //   aperture: string;
  //   focal_length: string;
  //   iso: number;
  // };
  location: {
    name: string | null;
    city: string | null;
    country: string | null;
    // position: {
    //   latitude: number;
    //   longitude: number;
    // };
  };
  // meta: {
  //   index: boolean;
  // };
  public_domain: boolean;
  // tags: {
  //   type: string;
  //   title: string;
  //   source?: {
  //     ancestry: {
  //       type: {
  //         slug: string;
  //         pretty_slug: string;
  //       };
  //       category: {
  //         slug: string;
  //         pretty_slug: string;
  //       };
  //     };
  //   };
  //   subtitle: string;
  //   description: string;
  //   meta_title: string;
  //   meta_description: string;
  // }[];
  // tags_preview: { type: string; title: string }[];
  views: number;
  downloads: number;
  // topics: unknown[];
}
export interface UnsplashAPIResponse {
  data: UnsplashAPIData[];
  // status: number;
  // statusText: string;
}

// export const getRandomImage = async (): Promise<UnsplashAPIResponse> => {
export const getRandomImages = async (): Promise<UnsplashAPIResponse> => {
  return await axios.get('/api/unsplash');
};
