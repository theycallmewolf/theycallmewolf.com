import { IMAGES } from 'constants/images';
import { useTheme } from 'hooks';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { animated, config, useSpring } from 'react-spring';
import { COLORS } from 'theme';

import styles from './styles.module.scss';

const Goodbye: React.FC = () => {
  const music = {
    id: 1,
    file: '/audio/we-will-meet-again.mp3',
    title: 'We will meet again',
    artist: 'Johnny Cash',
    album: 'American IV: The Man Comes Around',
    released_date: 2002
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [quote1, setQuote1] = useState(false);
  const [quote2, setQuote2] = useState(false);
  const [author, setAuthor] = useState(false);
  const [msg, setMsg] = useState(false);
  const [signature, setSignature] = useState(false);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);
  const [img6, setImg6] = useState(false);
  const [img7, setImg7] = useState(false);
  const [img8, setImg8] = useState(false);
  const [img9, setImg9] = useState(false);
  const [img10, setImg10] = useState(false);
  const [img11, setImg11] = useState(false);
  const [img12, setImg12] = useState(false);
  const [img13, setImg13] = useState(false);
  const [img14, setImg14] = useState(false);
  const [img15, setImg15] = useState(false);
  const [img16, setImg16] = useState(false);
  const [img17, setImg17] = useState(false);
  const [img18, setImg18] = useState(false);
  const [img19, setImg19] = useState(false);
  const [img20, setImg20] = useState(false);
  const [img21, setImg21] = useState(false);
  const [img22, setImg22] = useState(false);
  const [img23, setImg23] = useState(false);
  const [img24, setImg24] = useState(false);
  const [img25, setImg25] = useState(false);
  const [img26, setImg26] = useState(false);
  const [img27, setImg27] = useState(false);
  const [img28, setImg28] = useState(false);
  const [img29, setImg29] = useState(false);
  const [img30, setImg30] = useState(false);
  const [img31, setImg31] = useState(false);
  const [img32, setImg32] = useState(false);
  const [img33, setImg33] = useState(false);
  const [img34, setImg34] = useState(false);
  const [img35, setImg35] = useState(false);
  const [img36, setImg36] = useState(false);
  const [img37, setImg37] = useState(false);
  const [img38, setImg38] = useState(false);
  const [img39, setImg39] = useState(false);
  const [img40, setImg40] = useState(false);
  const [img41, setImg41] = useState(false);
  const [img42, setImg42] = useState(false);
  const [img43, setImg43] = useState(false);
  const [img44, setImg44] = useState(false);
  const [img45, setImg45] = useState(false);
  const [img46, setImg46] = useState(false);
  const [img47, setImg47] = useState(false);
  const [img48, setImg48] = useState(false);
  const [img49, setImg49] = useState(false);
  const [img50, setImg50] = useState(false);
  const [img51, setImg51] = useState(false);
  const [img52, setImg52] = useState(false);
  const [img53, setImg53] = useState(false);
  const [img54, setImg54] = useState(false);
  const [img55, setImg55] = useState(false);
  const [img56, setImg56] = useState(false);
  const [img57, setImg57] = useState(false);
  const [img58, setImg58] = useState(false);
  const [img59, setImg59] = useState(false);
  const [img60, setImg60] = useState(false);
  const [img61, setImg61] = useState(false);
  const [img62, setImg62] = useState(false);
  const [img63, setImg63] = useState(false);
  const [img64, setImg64] = useState(false);
  const [img65, setImg65] = useState(false);
  const [img66, setImg66] = useState(false);

  const renderProps = useCallback(
    (element: boolean) => ({
      y: element ? 0 : 30,
      opacity: element ? 1 : 0,
      delay: 0 * 1000,
      config: config.slow
    }),
    []
  );

  const appearFromBottomQuote1 = useSpring(renderProps(quote1));
  const appearFromBottomQuote2 = useSpring(renderProps(quote2));
  const appearFromBottomAuthor = useSpring(renderProps(author));
  const appearFromBottomMsg = useSpring(renderProps(msg));
  const appearFromBottomSignature = useSpring(renderProps(signature));
  const appearFromBottomImg1 = useSpring(renderProps(img1));
  const appearFromBottomImg2 = useSpring(renderProps(img2));
  const appearFromBottomImg3 = useSpring(renderProps(img3));
  const appearFromBottomImg4 = useSpring(renderProps(img4));
  const appearFromBottomImg5 = useSpring(renderProps(img5));
  const appearFromBottomImg6 = useSpring(renderProps(img6));
  const appearFromBottomImg7 = useSpring(renderProps(img7));
  const appearFromBottomImg8 = useSpring(renderProps(img8));
  const appearFromBottomImg9 = useSpring(renderProps(img9));
  const appearFromBottomImg10 = useSpring(renderProps(img10));
  const appearFromBottomImg11 = useSpring(renderProps(img11));
  const appearFromBottomImg12 = useSpring(renderProps(img12));
  const appearFromBottomImg13 = useSpring(renderProps(img13));
  const appearFromBottomImg14 = useSpring(renderProps(img14));
  const appearFromBottomImg15 = useSpring(renderProps(img15));
  const appearFromBottomImg16 = useSpring(renderProps(img16));
  const appearFromBottomImg17 = useSpring(renderProps(img17));
  const appearFromBottomImg18 = useSpring(renderProps(img18));
  const appearFromBottomImg19 = useSpring(renderProps(img19));
  const appearFromBottomImg20 = useSpring(renderProps(img20));
  const appearFromBottomImg21 = useSpring(renderProps(img21));
  const appearFromBottomImg22 = useSpring(renderProps(img22));
  const appearFromBottomImg23 = useSpring(renderProps(img23));
  const appearFromBottomImg24 = useSpring(renderProps(img24));
  const appearFromBottomImg25 = useSpring(renderProps(img25));
  const appearFromBottomImg26 = useSpring(renderProps(img26));
  const appearFromBottomImg27 = useSpring(renderProps(img27));
  const appearFromBottomImg28 = useSpring(renderProps(img28));
  const appearFromBottomImg29 = useSpring(renderProps(img29));
  const appearFromBottomImg30 = useSpring(renderProps(img30));
  const appearFromBottomImg31 = useSpring(renderProps(img31));
  const appearFromBottomImg32 = useSpring(renderProps(img32));
  const appearFromBottomImg33 = useSpring(renderProps(img33));
  const appearFromBottomImg34 = useSpring(renderProps(img34));
  const appearFromBottomImg35 = useSpring(renderProps(img35));
  const appearFromBottomImg36 = useSpring(renderProps(img36));
  const appearFromBottomImg37 = useSpring(renderProps(img37));
  const appearFromBottomImg38 = useSpring(renderProps(img38));
  const appearFromBottomImg39 = useSpring(renderProps(img39));
  const appearFromBottomImg40 = useSpring(renderProps(img40));
  const appearFromBottomImg41 = useSpring(renderProps(img41));
  const appearFromBottomImg42 = useSpring(renderProps(img42));
  const appearFromBottomImg43 = useSpring(renderProps(img43));
  const appearFromBottomImg44 = useSpring(renderProps(img44));
  const appearFromBottomImg45 = useSpring(renderProps(img45));
  const appearFromBottomImg46 = useSpring(renderProps(img46));
  const appearFromBottomImg47 = useSpring(renderProps(img47));
  const appearFromBottomImg48 = useSpring(renderProps(img48));
  const appearFromBottomImg49 = useSpring(renderProps(img49));
  const appearFromBottomImg50 = useSpring(renderProps(img50));
  const appearFromBottomImg51 = useSpring(renderProps(img51));
  const appearFromBottomImg52 = useSpring(renderProps(img52));
  const appearFromBottomImg53 = useSpring(renderProps(img53));
  const appearFromBottomImg54 = useSpring(renderProps(img54));
  const appearFromBottomImg55 = useSpring(renderProps(img55));
  const appearFromBottomImg56 = useSpring(renderProps(img56));
  const appearFromBottomImg57 = useSpring(renderProps(img57));
  const appearFromBottomImg58 = useSpring(renderProps(img58));
  const appearFromBottomImg59 = useSpring(renderProps(img59));
  const appearFromBottomImg60 = useSpring(renderProps(img60));
  const appearFromBottomImg61 = useSpring(renderProps(img61));
  const appearFromBottomImg62 = useSpring(renderProps(img62));
  const appearFromBottomImg63 = useSpring(renderProps(img63));
  const appearFromBottomImg64 = useSpring(renderProps(img64));
  const appearFromBottomImg65 = useSpring(renderProps(img65));
  const appearFromBottomImg66 = useSpring(renderProps(img66));

  const { getTheme, hasDarkMode } = useTheme();
  useEffect(() => getTheme(), [getTheme]);

  useEffect(() => {
    if (!isPlaying) return;
    setHasEnded(false);
    setTimeout(() => setQuote1(true), 1000 * 2);
    setTimeout(() => setQuote2(true), 1000 * 3);
    setTimeout(() => setAuthor(true), 1000 * 4);
    setTimeout(() => setMsg(true), 1000 * 6);
    setTimeout(() => setSignature(true), 1000 * 8);

    setTimeout(() => setImg1(true), 1000 * 1);
    setTimeout(() => setImg2(true), 1000 * 3);
    setTimeout(() => setImg3(true), 1000 * 15);
    setTimeout(() => setImg4(true), 1000 * 9);
    setTimeout(() => setImg5(true), 1000 * 12);
    setTimeout(() => setImg6(true), 1000 * 6);
    setTimeout(() => setImg7(true), 1000 * 18);
    setTimeout(() => setImg8(true), 1000 * 21);
    setTimeout(() => setImg9(true), 1000 * 24);
    setTimeout(() => setImg10(true), 1000 * 27);
    setTimeout(() => setImg11(true), 1000 * 30);
    setTimeout(() => setImg12(true), 1000 * 33);
    setTimeout(() => setImg13(true), 1000 * 36);
    setTimeout(() => setImg14(true), 1000 * 39);
    setTimeout(() => setImg15(true), 1000 * 42);
    setTimeout(() => setImg16(true), 1000 * 45);
    setTimeout(() => setImg17(true), 1000 * 48);
    setTimeout(() => setImg18(true), 1000 * 51);
    setTimeout(() => setImg19(true), 1000 * 54);
    setTimeout(() => setImg20(true), 1000 * 57);
    setTimeout(() => setImg21(true), 1000 * 60);
    setTimeout(() => setImg22(true), 1000 * 63);
    setTimeout(() => setImg23(true), 1000 * 66);
    setTimeout(() => setImg24(true), 1000 * 69);
    setTimeout(() => setImg25(true), 1000 * 72);
    setTimeout(() => setImg26(true), 1000 * 75);
    setTimeout(() => setImg27(true), 1000 * 78);
    setTimeout(() => setImg28(true), 1000 * 81);
    setTimeout(() => setImg29(true), 1000 * 84);
    setTimeout(() => setImg30(true), 1000 * 87);
    setTimeout(() => setImg31(true), 1000 * 90);
    setTimeout(() => setImg32(true), 1000 * 93);
    setTimeout(() => setImg33(true), 1000 * 96);
    setTimeout(() => setImg34(true), 1000 * 99);
    setTimeout(() => setImg35(true), 1000 * 102);
    setTimeout(() => setImg36(true), 1000 * 105);
    setTimeout(() => setImg37(true), 1000 * 108);
    setTimeout(() => setImg38(true), 1000 * 111);
    setTimeout(() => setImg39(true), 1000 * 114);
    setTimeout(() => setImg40(true), 1000 * 117);
    setTimeout(() => setImg41(true), 1000 * 120);
    setTimeout(() => setImg42(true), 1000 * 122);
    setTimeout(() => setImg43(true), 1000 * 124);
    setTimeout(() => setImg44(true), 1000 * 126);
    setTimeout(() => setImg45(true), 1000 * 128);
    setTimeout(() => setImg46(true), 1000 * 130);
    setTimeout(() => setImg47(true), 1000 * 132);
    setTimeout(() => setImg48(true), 1000 * 134);
    setTimeout(() => setImg49(true), 1000 * 136);
    setTimeout(() => setImg50(true), 1000 * 138);
    setTimeout(() => setImg51(true), 1000 * 140);
    setTimeout(() => setImg52(true), 1000 * 142);
    setTimeout(() => setImg53(true), 1000 * 144);
    setTimeout(() => setImg54(true), 1000 * 146);
    setTimeout(() => setImg55(true), 1000 * 148);
    setTimeout(() => setImg56(true), 1000 * 150);
    setTimeout(() => setImg57(true), 1000 * 152);
    setTimeout(() => setImg58(true), 1000 * 154);
    setTimeout(() => setImg59(true), 1000 * 156);
    setTimeout(() => setImg60(true), 1000 * 158);
    setTimeout(() => setImg61(true), 1000 * 160);
    setTimeout(() => setImg62(true), 1000 * 162);
    setTimeout(() => setImg63(true), 1000 * 164);
    setTimeout(() => setImg64(true), 1000 * 166);
    setTimeout(() => setImg65(true), 1000 * 168);
    setTimeout(() => setImg66(true), 1000 * 170);
  }, [isPlaying]);

  const resetAnimation = useCallback(() => {
    setTimeout(() => setQuote1(false), 1000 * 0.05);
    setTimeout(() => setQuote2(false), 1000 * 0.1);
    setTimeout(() => setAuthor(false), 1000 * 0.15);
    setTimeout(() => setMsg(false), 1000 * 0.2);
    setTimeout(() => setSignature(false), 1000 * 0.25);
    setTimeout(() => setImg1(false), 1000 * 0.3);
    setTimeout(() => setImg2(false), 1000 * 0.35);
    setTimeout(() => setImg3(false), 1000 * 0.4);
    setTimeout(() => setImg4(false), 1000 * 0.45);
    setTimeout(() => setImg5(false), 1000 * 0.5);
    setTimeout(() => setImg6(false), 1000 * 0.55);
    setTimeout(() => setImg7(false), 1000 * 0.6);
    setTimeout(() => setImg8(false), 1000 * 0.65);
    setTimeout(() => setImg9(false), 1000 * 0.7);
    setTimeout(() => setImg10(false), 1000 * 0.75);
    setTimeout(() => setImg11(false), 1000 * 0.8);
    setTimeout(() => setImg12(false), 1000 * 0.85);
    setTimeout(() => setImg13(false), 1000 * 0.9);
    setTimeout(() => setImg14(false), 1000 * 0.95);
    setTimeout(() => setImg15(false), 1000 * 1);
    setTimeout(() => setImg16(false), 1000 * 1.05);
    setTimeout(() => setImg17(false), 1000 * 1.1);
    setTimeout(() => setImg18(false), 1000 * 1.15);
    setTimeout(() => setImg19(false), 1000 * 1.2);
    setTimeout(() => setImg20(false), 1000 * 1.25);
    setTimeout(() => setImg21(false), 1000 * 1.3);
    setTimeout(() => setImg22(false), 1000 * 1.35);
    setTimeout(() => setImg23(false), 1000 * 1.4);
    setTimeout(() => setImg24(false), 1000 * 1.45);
    setTimeout(() => setImg25(false), 1000 * 1.5);
    setTimeout(() => setImg26(false), 1000 * 1.55);
    setTimeout(() => setImg27(false), 1000 * 1.6);
    setTimeout(() => setImg28(false), 1000 * 1.65);
    setTimeout(() => setImg29(false), 1000 * 1.7);
    setTimeout(() => setImg30(false), 1000 * 1.75);
    setTimeout(() => setImg31(false), 1000 * 1.8);
    setTimeout(() => setImg32(false), 1000 * 1.85);
    setTimeout(() => setImg33(false), 1000 * 1.9);
    setTimeout(() => setImg34(false), 1000 * 1.95);
    setTimeout(() => setImg35(false), 1000 * 2);
    setTimeout(() => setImg36(false), 1000 * 2.05);
    setTimeout(() => setImg37(false), 1000 * 2.1);
    setTimeout(() => setImg38(false), 1000 * 2.15);
    setTimeout(() => setImg39(false), 1000 * 2.2);
    setTimeout(() => setImg40(false), 1000 * 2.25);
    setTimeout(() => setImg41(false), 1000 * 2.3);
    setTimeout(() => setImg42(false), 1000 * 2.35);
    setTimeout(() => setImg43(false), 1000 * 2.4);
    setTimeout(() => setImg44(false), 1000 * 2.45);
    setTimeout(() => setImg45(false), 1000 * 3);
    setTimeout(() => setImg46(false), 1000 * 3.05);
    setTimeout(() => setImg47(false), 1000 * 3.1);
    setTimeout(() => setImg48(false), 1000 * 3.15);
    setTimeout(() => setImg49(false), 1000 * 3.2);
    setTimeout(() => setImg50(false), 1000 * 3.25);
    setTimeout(() => setImg51(false), 1000 * 3.3);
    setTimeout(() => setImg52(false), 1000 * 3.35);
    setTimeout(() => setImg53(false), 1000 * 3.4);
    setTimeout(() => setImg54(false), 1000 * 3.45);
    setTimeout(() => setImg55(false), 1000 * 3.5);
    setTimeout(() => setImg56(false), 1000 * 3.55);
    setTimeout(() => setImg57(false), 1000 * 3.6);
    setTimeout(() => setImg58(false), 1000 * 3.65);
    setTimeout(() => setImg59(false), 1000 * 3.7);
    setTimeout(() => setImg60(false), 1000 * 3.75);
    setTimeout(() => setImg61(false), 1000 * 3.8);
    setTimeout(() => setImg62(false), 1000 * 3.85);
    setTimeout(() => setImg63(false), 1000 * 3.9);
    setTimeout(() => setImg64(false), 1000 * 3.95);
    setTimeout(() => setImg65(false), 1000 * 4);
    setTimeout(() => setImg66(false), 1000 * 4.05);
    setIsPlaying(false);
    setHasEnded(true);
  }, []);

  const people = [
    {
      id: 1,
      name: 'Marcia',
      animation: appearFromBottomImg1,
      style: 'img1',
      image: IMAGES.MARSIA_2
    },
    {
      id: 2,
      name: 'Dipanda',
      animation: appearFromBottomImg2,
      style: 'img2',
      image: IMAGES.DIPANDA_1
    },
    {
      id: 3,
      name: 'Sandra',
      animation: appearFromBottomImg3,
      style: 'img3',
      image: IMAGES.SANDRA_1
    },
    {
      id: 4,
      name: 'Pedro',
      animation: appearFromBottomImg4,
      style: 'img4',
      image: IMAGES.PEDRO_1
    },
    {
      id: 5,
      name: 'Tania',
      animation: appearFromBottomImg5,
      style: 'img5',
      image: IMAGES.TANIA_1
    },
    {
      id: 6,
      name: 'Ines e Eu',
      animation: appearFromBottomImg6,
      style: 'img6',
      image: IMAGES.INES_1
    },
    {
      id: 7,
      name: 'Sandra, Camila e Eu',
      animation: appearFromBottomImg7,
      style: 'img7',
      image: IMAGES.MKT_1
    },
    {
      id: 8,
      name: 'Ed',
      animation: appearFromBottomImg8,
      style: 'img8',
      image: IMAGES.ED_2
    },
    {
      id: 9,
      name: 'Juke',
      animation: appearFromBottomImg9,
      style: 'img9',
      image: IMAGES.JUKE_1
    },
    {
      id: 10,
      name: 'Susana',
      animation: appearFromBottomImg10,
      style: 'img10',
      image: IMAGES.SUSANA_2
    },
    {
      id: 11,
      name: 'Ana',
      animation: appearFromBottomImg11,
      style: 'img11',
      image: IMAGES.ANA_2
    },
    {
      id: 12,
      name: 'Camila',
      animation: appearFromBottomImg12,
      style: 'img12',
      image: IMAGES.CAMILA_1
    },
    {
      id: 13,
      name: 'Pedro',
      animation: appearFromBottomImg13,
      style: 'img13',
      image: IMAGES.PEDRO_2
    },
    {
      id: 14,
      name: 'Isabel',
      animation: appearFromBottomImg14,
      style: 'img14',
      image: IMAGES.ISABEL_1
    },
    {
      id: 15,
      name: 'Camila',
      animation: appearFromBottomImg15,
      style: 'img15',
      image: IMAGES.CAMILA_2
    },
    {
      id: 16,
      name: 'Pedrasus',
      animation: appearFromBottomImg16,
      style: 'img16',
      image: IMAGES.PEDRASUS_1
    },
    {
      id: 17,
      name: 'Flash',
      animation: appearFromBottomImg17,
      style: 'img17',
      image: IMAGES.FLASH_1
    },
    {
      id: 18,
      name: 'Nadia e Ricardo',
      animation: appearFromBottomImg18,
      style: 'img18',
      image: IMAGES.NADIA_RICARDO_1
    },
    {
      id: 19,
      name: 'Selos',
      animation: appearFromBottomImg19,
      style: 'img19',
      image: IMAGES.SELOS
    },
    {
      id: 20,
      name: 'Rita',
      animation: appearFromBottomImg20,
      style: 'img20',
      image: IMAGES.RITA_1
    },
    {
      id: 21,
      name: 'Mafalda',
      animation: appearFromBottomImg21,
      style: 'img21',
      image: IMAGES.MAFALDA_1
    },
    {
      id: 22,
      name: 'Cris',
      animation: appearFromBottomImg22,
      style: 'img22',
      image: IMAGES.CRIS_1
    },
    {
      id: 23,
      name: 'Goat',
      animation: appearFromBottomImg23,
      style: 'img23',
      image: IMAGES.GOAT_1
    },
    {
      id: 24,
      name: 'fortune cookie',
      animation: appearFromBottomImg24,
      style: 'img24',
      image: IMAGES.COOKIE
    },
    {
      id: 25,
      name: 'Morgadinho',
      animation: appearFromBottomImg25,
      style: 'img25',
      image: IMAGES.MORGADINHO_1
    },
    {
      id: 26,
      name: 'Florence',
      animation: appearFromBottomImg26,
      style: 'img26',
      image: IMAGES.FLORENCE_1
    },
    {
      id: 27,
      name: 'Ti Lu',
      animation: appearFromBottomImg27,
      style: 'img27',
      image: IMAGES.TI_LU_1
    },
    {
      id: 28,
      name: 'Baliza',
      animation: appearFromBottomImg28,
      style: 'img28',
      image: IMAGES.BALIZA_1
    },
    {
      id: 29,
      name: 'Bengas',
      animation: appearFromBottomImg29,
      style: 'img29',
      image: IMAGES.BENGAS_1
    },
    {
      id: 30,
      name: 'Manequim',
      animation: appearFromBottomImg30,
      style: 'img30',
      image: IMAGES.MANEQUIM
    },
    {
      id: 31,
      name: 'Rodrigo',
      animation: appearFromBottomImg31,
      style: 'img31',
      image: IMAGES.RODRIGO_1
    },
    {
      id: 32,
      name: 'Siri',
      animation: appearFromBottomImg32,
      style: 'img32',
      image: IMAGES.SIRI_1
    },
    {
      id: 33,
      name: 'Radio',
      animation: appearFromBottomImg33,
      style: 'img33',
      image: IMAGES.RADIO
    },
    {
      id: 34,
      name: 'Ricardo Almeida',
      animation: appearFromBottomImg34,
      style: 'img34',
      image: IMAGES.RICARDO_ALMEIDA_1
    },
    {
      id: 35,
      name: 'Chewie',
      animation: appearFromBottomImg35,
      style: 'img35',
      image: IMAGES.CHEWIE
    },
    {
      id: 36,
      name: 'Carla',
      animation: appearFromBottomImg36,
      style: 'img36',
      image: IMAGES.CARLA_1
    },
    {
      id: 37,
      name: 'Paula',
      animation: appearFromBottomImg37,
      style: 'img37',
      image: IMAGES.PAULA_1
    },
    {
      id: 38,
      name: 'Monica',
      animation: appearFromBottomImg38,
      style: 'img38',
      image: IMAGES.MONICA_1
    },
    {
      id: 39,
      name: 'Paulo',
      animation: appearFromBottomImg39,
      style: 'img39',
      image: IMAGES.PAULO_1
    },
    {
      id: 40,
      name: 'Nando',
      animation: appearFromBottomImg40,
      style: 'img40',
      image: IMAGES.NANDO_2
    },
    {
      id: 41,
      name: 'Cubana',
      animation: appearFromBottomImg41,
      style: 'img41',
      image: IMAGES.CUBANA_1
    },
    {
      id: 42,
      name: 'Ana e Camila',
      animation: appearFromBottomImg42,
      style: 'img42',
      image: IMAGES.ANA_1
    },
    {
      id: 43,
      name: 'RIR',
      animation: appearFromBottomImg43,
      style: 'img43',
      image: IMAGES.MUSIC_1
    },
    {
      id: 44,
      name: 'Andre',
      animation: appearFromBottomImg44,
      style: 'img44',
      image: IMAGES.ANDRE_1
    },
    {
      id: 45,
      name: 'Renault e Juke',
      animation: appearFromBottomImg45,
      style: 'img45',
      image: IMAGES.MARTA_1
    },
    {
      id: 46,
      name: 'JP',
      animation: appearFromBottomImg46,
      style: 'img46',
      image: IMAGES.JP_1
    },
    {
      id: 47,
      name: 'Fale',
      animation: appearFromBottomImg47,
      style: 'img47',
      image: IMAGES.FALE_1
    },
    {
      id: 48,
      name: 'Lourisela',
      animation: appearFromBottomImg48,
      style: 'img48',
      image: IMAGES.LOURISELA_1
    },
    {
      id: 49,
      name: 'Mo',
      animation: appearFromBottomImg49,
      style: 'img49',
      image: IMAGES.INES_GOIS_1
    },
    {
      id: 50,
      name: 'Mo',
      animation: appearFromBottomImg50,
      style: 'img50',
      image: IMAGES.DAVIDE_1
    },
    {
      id: 51,
      name: 'Nick',
      animation: appearFromBottomImg51,
      style: 'img51',
      image: IMAGES.NICK_1
    },
    {
      id: 52,
      name: 'Ricardo Duarte',
      animation: appearFromBottomImg52,
      style: 'img52',
      image: IMAGES.RICARDO_DUARTE_1
    },
    {
      id: 53,
      name: 'Barbara',
      animation: appearFromBottomImg53,
      style: 'img53',
      image: IMAGES.BARBARA_1
    },
    {
      id: 54,
      name: 'António',
      animation: appearFromBottomImg54,
      style: 'img54',
      image: IMAGES.ANTONIO_1
    },
    {
      id: 55,
      name: 'Rita Oliveira',
      animation: appearFromBottomImg55,
      style: 'img55',
      image: IMAGES.RITA_OLIVEIRA_1
    },
    //////////////////////
    {
      id: 56,
      name: 'Gonçalo',
      animation: appearFromBottomImg56,
      style: 'img56',
      image: IMAGES.GONCALO_1
    },
    {
      id: 57,
      name: 'Heidi',
      animation: appearFromBottomImg57,
      style: 'img57',
      image: IMAGES.HEIDI_1
    },
    {
      id: 58,
      name: 'Goat',
      animation: appearFromBottomImg58,
      style: 'img58',
      image: IMAGES.GOAT
    },
    {
      id: 59,
      name: 'Cat',
      animation: appearFromBottomImg59,
      style: 'img59',
      image: IMAGES.CAT_1
    },
    {
      id: 60,
      name: 'Junior',
      animation: appearFromBottomImg60,
      style: 'img60',
      image: IMAGES.JUNIOR_1
    },
    {
      id: 61,
      name: 'Bomb',
      animation: appearFromBottomImg61,
      style: 'img61',
      image: IMAGES.BOMB
    },
    {
      id: 62,
      name: 'Marta Simão',
      animation: appearFromBottomImg62,
      style: 'img62',
      image: IMAGES.MARTA_SIMAO_1
    },
    {
      id: 63,
      name: 'Toni',
      animation: appearFromBottomImg63,
      style: 'img63',
      image: IMAGES.TONI_1
    },
    {
      id: 64,
      name: 'Wally',
      animation: appearFromBottomImg64,
      style: 'img64',
      image: IMAGES.WALLY
    },
    {
      id: 65,
      name: 'João Monteiro',
      animation: appearFromBottomImg65,
      style: 'img65',
      image: IMAGES.JOAO_MONTEIRO_1
    },
    {
      id: 66,
      name: 'Carla Pereira',
      animation: appearFromBottomImg66,
      style: 'img66',
      image: IMAGES.CARLA_PEREIRA_1
    }
  ];

  return (
    <>
      <Head>
        <title>work | they call me wolf</title>
        <meta
          name="description"
          content="Here's the list of some of the projects (personal and profissional) that Mr. Wolf worked on. From Web development to illustration, passing through UI design and graphic design. It's a lot... of gray hair at least."
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="msapplication-TileColor"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
        <meta
          name="theme-color"
          content={hasDarkMode ? COLORS.COSMOS_BLACK : COLORS.IRIDIUM_WHITE}
        />
      </Head>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.message}>
            <figure>
              <blockquote>
                <animated.h2 style={appearFromBottomQuote1}>Onde as palavras falham</animated.h2>
                <animated.h2 style={appearFromBottomQuote2}>a música fala</animated.h2>
              </blockquote>
              <animated.figcaption style={appearFromBottomAuthor}>
                - Hans Christian Andersen -
              </animated.figcaption>
            </figure>
            {hasEnded ? (
              <>
                <p>Humm... Ainda estás aí?</p>
                <p className={styles.signature} style={{ zIndex: 100 }}>
                  Então visita o{' '}
                  <Link href="/">
                    <a style={{ borderBottom: '2px dashed #D20120' }}>meu site</a>
                  </Link>
                </p>
              </>
            ) : (
              <>
                <animated.p style={appearFromBottomMsg}>
                  Até já amigos.
                  <br /> Felicidades colegas.
                </animated.p>
                <animated.p style={appearFromBottomSignature} className={styles.signature}>
                  Wolf
                </animated.p>
              </>
            )}
            {!hasEnded && (
              <div className={styles.images}>
                <div className={styles.wrapper}>
                  {people.map((p) => (
                    <animated.div key={p.id} style={p.animation} className={styles[p.style]}>
                      <Image src={p.image} alt={p.name} layout="fill" objectFit="contain" />
                    </animated.div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.player}>
            <ReactAudioPlayer
              src={music.file}
              autoPlay
              controls
              onPlay={() => {
                setIsPlaying(true);
                setHasEnded(false);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={resetAnimation}
              // muted
            />
            {isPlaying && <p>{`"${music.title}", ${music.artist} (${music.released_date})`}</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Goodbye;
