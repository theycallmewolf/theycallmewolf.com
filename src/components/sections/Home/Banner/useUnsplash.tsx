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
  unsplashQuery: string;
  setUnsplashQuery: Dispatch<SetStateAction<string>>;
  setUserSearch: Dispatch<SetStateAction<boolean>>;
  currentBgImage: UnsplashAPIData;
  setCurrentBgImage: Dispatch<SetStateAction<UnsplashAPIData>>;
  addBackgroundImage: () => void;
  showDialogBox: boolean;
  setShowDialogBox: Dispatch<SetStateAction<boolean>>;
  showContent: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  noResults: boolean;
  unsplashAPIUnavailable: boolean;
}

const UnsplashContext = createContext<UnsplashData>({} as UnsplashData);

export const UNSPLASH_DEFAULT_QUERY = 'abstract';

const UnsplashProvider: React.FC = ({ children }) => {
  const [userSearch, setUserSearch] = useState(false);
  const [images, setImages] = useState<UnsplashAPIData[]>();
  const [unsplashQuery, setUnsplashQuery] = useState(UNSPLASH_DEFAULT_QUERY);
  const [currentBgImage, setCurrentBgImage] = useState<UnsplashAPIData>();
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [unsplashAPIUnavailable, setUnsplashAPIUnavailable] = useState(true);

  const getImages = useCallback(async () => {
    if (images && !userSearch) return;

    try {
      const res = await getRandomImages({ query: unsplashQuery });

      // case unsplash api error (hide search from `DialogBox`)
      setUnsplashAPIUnavailable(res.data.message === 'expected JSON response from server.');

      // case no results from user query (show `DialogBox` alert)
      setNoResults(res.data.message === 'No photos found.');
      setUnsplashQuery(UNSPLASH_DEFAULT_QUERY);
      setTimeout(() => {
        setNoResults(false);
      }, 3000);

      if (!Array.isArray(res.data.results)) {
        setImages(fallbackBgImages);
        return;
      }

      setImages(res.data.results);
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

  useEffect(() => {
    if (!images) return;

    addBackgroundImage();
    const intervalID = setInterval(() => addBackgroundImage(), 10_000);
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <UnsplashContext.Provider
      value={{
        images,
        getImages,
        unsplashQuery,
        setUnsplashQuery,
        setUserSearch,
        currentBgImage,
        setCurrentBgImage,
        addBackgroundImage,
        showDialogBox,
        setShowDialogBox,
        showContent,
        setShowContent,
        noResults,
        unsplashAPIUnavailable
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
