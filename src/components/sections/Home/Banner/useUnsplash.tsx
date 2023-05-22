import { fallbackBgImages } from 'assets/constants/bg-images';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { getRandomImages, UnsplashAPIData } from 'services/unsplash';
import { getRandomInt } from 'utils';
import { NODE_DEV } from 'utils/dev';

interface UnsplashData {
  images: UnsplashAPIData[];
  getImages: () => Promise<void>;
  setUnsplashQuery: Dispatch<SetStateAction<string>>;
  setUserSearch: Dispatch<SetStateAction<boolean>>;
  currentBgImage: UnsplashAPIData;
  setCurrentBgImage: Dispatch<SetStateAction<UnsplashAPIData>>;
  addBackgroundImage: () => void;
}

const UnsplashContext = createContext<UnsplashData>({} as UnsplashData);

const UnsplashProvider: React.FC = ({ children }) => {
  const [userSearch, setUserSearch] = useState(false);
  const [images, setImages] = useState<UnsplashAPIData[]>();
  const [unsplashQuery, setUnsplashQuery] = useState('abstract');
  const [currentBgImage, setCurrentBgImage] = useState<UnsplashAPIData>();

  const getImages = useCallback(async () => {
    if (images && !userSearch) return;

    try {
      const res = await getRandomImages({ query: unsplashQuery });

      if (!Array.isArray(res.data)) {
        setImages(fallbackBgImages);
        return;
      }

      console.log('[R]', res.data);
      setImages(res.data);
      setUserSearch(false);
    } catch (error) {
      NODE_DEV && console.info('[error]', error);
    }
  }, [images, unsplashQuery, userSearch]);

  const addBackgroundImage = useCallback(() => {
    const imgArray = images ?? fallbackBgImages;
    const index = getRandomInt(0, imgArray.length - 1);
    setCurrentBgImage(imgArray[index]);
  }, [images, setCurrentBgImage]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <UnsplashContext.Provider
      value={{
        images,
        getImages,
        setUnsplashQuery,
        setUserSearch,
        currentBgImage,
        setCurrentBgImage,
        addBackgroundImage
      }}>
      {children}
    </UnsplashContext.Provider>
  );
};

const useUnsplash = (): UnsplashData => {
  const context = useContext(UnsplashContext);
  if (!context) throw Error('the hook useUnsplash must be used inside a NavProvider');
  return context;
};

export { UnsplashProvider, useUnsplash };
