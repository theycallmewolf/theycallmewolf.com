import { IMAGES } from 'constants/images';
import { useTheme } from 'hooks/useTheme';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { animated, config, useSpring } from 'react-spring';
import { COLORS } from 'theme';

import styles from './styles.module.scss';

export default function Goodbye(): JSX.Element {
  const music = {
    id: 1,
    file: '/audio/we-will-meet-again.mp3',
    title: 'We will meet again',
    artist: 'Johnny Cash',
    album: 'American IV: The Man Comes Around',
    released_date: 2002
  };

  const [isPlaying, setIsPlaying] = useState(false);
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

  const { getTheme, hasDarkMode } = useTheme();
  useEffect(() => getTheme(), [getTheme]);

  useEffect(() => {
    if (!isPlaying) return;
    setTimeout(() => setQuote1(true), 1000 * 2);
    setTimeout(() => setQuote2(true), 1000 * 3);
    setTimeout(() => setAuthor(true), 1000 * 4);
    setTimeout(() => setMsg(true), 1000 * 6);
    setTimeout(() => setSignature(true), 1000 * 8);

    setTimeout(() => setImg1(true), 1000 * 1);
    setTimeout(() => setImg2(true), 1000 * 3);
    setTimeout(() => setImg3(true), 1000 * 6);
    setTimeout(() => setImg4(true), 1000 * 9);
    setTimeout(() => setImg5(true), 1000 * 12);
    setTimeout(() => setImg6(true), 1000 * 15);
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
    setTimeout(() => setImg42(true), 1000 * 123);
    setTimeout(() => setImg43(true), 1000 * 126);
    setTimeout(() => setImg44(true), 1000 * 129);
    setTimeout(() => setImg45(true), 1000 * 132);
    setTimeout(() => setImg46(true), 1000 * 135);
    setTimeout(() => setImg47(true), 1000 * 138);
    setTimeout(() => setImg48(true), 1000 * 141);
    setTimeout(() => setImg49(true), 1000 * 144);
    setTimeout(() => setImg50(true), 1000 * 147);
    setTimeout(() => setImg51(true), 1000 * 150);
    setTimeout(() => setImg52(true), 1000 * 153);
    setTimeout(() => setImg53(true), 1000 * 156);
    setTimeout(() => setImg54(true), 1000 * 159);
    setTimeout(() => setImg55(true), 1000 * 162);
  }, [isPlaying]);

  const resetAnimation = useCallback(() => {
    setQuote1(false);
    setQuote2(false);
    setAuthor(false);
    setMsg(false);
    setSignature(false);
    setImg1(false);
    setImg2(false);
    setImg3(false);
    setImg4(false);
    setImg5(false);
    setImg6(false);
    setImg7(false);
    setImg8(false);
    setImg9(false);
    setImg10(false);
    setImg11(false);
    setImg12(false);
    setImg13(false);
    setImg14(false);
    setImg15(false);
    setImg16(false);
    setImg17(false);
    setImg18(false);
    setImg19(false);
    setImg20(false);
    setImg21(false);
    setImg22(false);
    setImg23(false);
    setImg24(false);
    setImg25(false);
    setImg26(false);
    setImg27(false);
    setImg28(false);
    setImg29(false);
    setImg30(false);
    setImg31(false);
    setImg32(false);
    setImg33(false);
    setImg34(false);
    setImg35(false);
    setImg36(false);
    setImg37(false);
    setImg38(false);
    setImg39(false);
    setImg40(false);
    setImg41(false);
    setImg42(false);
    setImg43(false);
    setImg44(false);
    setImg45(false);
    setImg46(false);
    setImg47(false);
    setImg48(false);
    setImg49(false);
    setImg50(false);
    setImg51(false);
    setImg52(false);
    setImg53(false);
    setImg54(false);
    setImg55(false);
  }, []);

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
            <animated.p style={appearFromBottomMsg}>
              Até já amigos.
              <br /> Felicidades colegas.
            </animated.p>
            <animated.p style={appearFromBottomSignature} className={styles.signature}>
              Wolf
            </animated.p>
            <div className={styles.images}>
              <div className={styles.wrapper}>
                <animated.div style={appearFromBottomImg1} className={styles.img1}>
                  <Image src={IMAGES.MARSIA_2} alt="Marcia" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg2} className={styles.img2}>
                  <Image src={IMAGES.DIPANDA_1} alt="Dipanda" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg3} className={styles.img3}>
                  <Image src={IMAGES.SANDRA_1} alt="Sandra" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg4} className={styles.img4}>
                  <Image src={IMAGES.PEDRO_1} alt="Pedro" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg5} className={styles.img5}>
                  <Image src={IMAGES.TANIA_1} alt="Tania" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg6} className={styles.img6}>
                  <Image src={IMAGES.INES_1} alt="Ines e Eu" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg7} className={styles.img7}>
                  <Image
                    src={IMAGES.MKT_1}
                    alt="Sandra, Camila e Eu"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg8} className={styles.img8}>
                  <Image src={IMAGES.ED_2} alt="Ed" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg9} className={styles.img9}>
                  <Image src={IMAGES.JUKE_1} alt="Juke" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg10} className={styles.img10}>
                  <Image src={IMAGES.SUSANA_2} alt="Susana" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg11} className={styles.img11}>
                  <Image src={IMAGES.ANA_2} alt="Ana" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg12} className={styles.img12}>
                  <Image src={IMAGES.CAMILA_1} alt="Camila" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg13} className={styles.img13}>
                  <Image src={IMAGES.PEDRO_2} alt="Pedro" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg14} className={styles.img14}>
                  <Image src={IMAGES.ISABEL_1} alt="Isabel" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg15} className={styles.img15}>
                  <Image src={IMAGES.CAMILA_2} alt="Isabel" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg16} className={styles.img16}>
                  <Image src={IMAGES.PEDRASUS_1} alt="Pedrasus" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg17} className={styles.img17}>
                  <Image src={IMAGES.FLASH_1} alt="Flash" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg18} className={styles.img18}>
                  <Image
                    src={IMAGES.NADIA_RICARDO_1}
                    alt="Nadia e Ricardo"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg19} className={styles.img19}>
                  <Image src={IMAGES.SELOS} alt="Selos" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg20} className={styles.img20}>
                  <Image src={IMAGES.RITA_1} alt="Rita" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg21} className={styles.img21}>
                  <Image src={IMAGES.MAFALDA_1} alt="Mafalda" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg22} className={styles.img22}>
                  <Image src={IMAGES.CRIS_1} alt="Cris" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg23} className={styles.img23}>
                  <Image src={IMAGES.GOAT_1} alt="Goat" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg24} className={styles.img24}>
                  <Image
                    src={IMAGES.COOKIE}
                    alt="fortune cookie"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg25} className={styles.img25}>
                  <Image
                    src={IMAGES.MORGADINHO_1}
                    alt="Morgadinho"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg26} className={styles.img26}>
                  <Image src={IMAGES.FLORENCE_1} alt="Florence" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg27} className={styles.img27}>
                  <Image src={IMAGES.TI_LU_1} alt="Ti Lu" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg28} className={styles.img28}>
                  <Image src={IMAGES.BALIZA_1} alt="Ti Lu" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg29} className={styles.img29}>
                  <Image src={IMAGES.BENGAS_1} alt="Bengas" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg30} className={styles.img30}>
                  <Image src={IMAGES.MANEQUIM} alt="Manequim" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg31} className={styles.img31}>
                  <Image src={IMAGES.RODRIGO_1} alt="Rodrigo" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg32} className={styles.img32}>
                  <Image src={IMAGES.SIRI_1} alt="Siri" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg33} className={styles.img33}>
                  <Image src={IMAGES.RADIO} alt="Radio" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg34} className={styles.img34}>
                  <Image
                    src={IMAGES.RICARDO_ALMEIDA_1}
                    alt="Ricardo Almeida"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg35} className={styles.img35}>
                  <Image src={IMAGES.CHEWIE} alt="Chewie" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg36} className={styles.img36}>
                  <Image src={IMAGES.CARLA_1} alt="Carla" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg37} className={styles.img37}>
                  <Image src={IMAGES.PAULA_1} alt="Paula" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg38} className={styles.img38}>
                  <Image src={IMAGES.MONICA_1} alt="Monica" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg39} className={styles.img39}>
                  <Image src={IMAGES.PAULO_1} alt="Paulo" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg40} className={styles.img40}>
                  <Image src={IMAGES.NANDO_2} alt="Nando" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg41} className={styles.img41}>
                  <Image src={IMAGES.CUBANA_1} alt="Cubana" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg42} className={styles.img42}>
                  <Image src={IMAGES.ANA_1} alt="Ana e Camila" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg43} className={styles.img43}>
                  <Image src={IMAGES.MUSIC_1} alt="RIR" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg44} className={styles.img44}>
                  <Image src={IMAGES.ANDRE_1} alt="Andre" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg45} className={styles.img45}>
                  <Image
                    src={IMAGES.MARTA_1}
                    alt="Renault e Juke"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg46} className={styles.img46}>
                  <Image src={IMAGES.JP_1} alt="JP" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg47} className={styles.img47}>
                  <Image src={IMAGES.FALE_1} alt="Fale" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg48} className={styles.img48}>
                  <Image
                    src={IMAGES.LOURISELA_1}
                    alt="Lourisela"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg49} className={styles.img49}>
                  <Image
                    src={IMAGES.INES_GOIS_1}
                    alt="Inês Gois"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg50} className={styles.img50}>
                  <Image src={IMAGES.DAVIDE_1} alt="Davide" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg51} className={styles.img51}>
                  <Image src={IMAGES.NICK_1} alt="Nick" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg52} className={styles.img52}>
                  <Image
                    src={IMAGES.RICARDO_DUARTE_1}
                    alt="Ricardo Duarte"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
                <animated.div style={appearFromBottomImg53} className={styles.img53}>
                  <Image src={IMAGES.BARBARA_1} alt="Barbara" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg54} className={styles.img54}>
                  <Image src={IMAGES.ANTONIO_1} alt="António" layout="fill" objectFit="contain" />
                </animated.div>
                <animated.div style={appearFromBottomImg55} className={styles.img55}>
                  <Image
                    src={IMAGES.RITA_OLIVEIRA_1}
                    alt="Rita Oliveira"
                    layout="fill"
                    objectFit="contain"
                  />
                </animated.div>
              </div>
            </div>
          </div>
          <div className={styles.player}>
            <ReactAudioPlayer
              src={music.file}
              autoPlay
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={resetAnimation}
              // muted
            />
            <ul>
              <li>
                <span>titulo:</span> {music.title}
              </li>
              <li>
                <span>artista:</span> {music.artist}
              </li>
              <li>
                <span>album:</span> {music.album}
              </li>
              <li>
                <span>ano:</span> {music.released_date}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
