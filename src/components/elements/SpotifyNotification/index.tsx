import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

import { IHeadphones, IPlay } from '../../../assets/icons';
import { LogoSpotify } from './LogoSpotify';
import styles from './styles.module.scss';

interface ISpotifyMusic {
  is_playing: boolean;
  album: {
    name: string;
    release_date: string;
    spotify_url: string;
    images: {
      width: number;
      height: number;
      url: string;
    }[];
  };
  artists: {
    name: string;
    spotify_url: string;
  }[];
  song: {
    name: string;
    duration_ms: number;
    popularity: number;
    spotify_url: string;
    preview_url: string;
  };
}

export function SpotifyNotification(): JSX.Element {
  const [spotifyMusic, setSpotifyMusic] = useState<ISpotifyMusic>({} as ISpotifyMusic);
  const [showToast, setShowToast] = useState(false);

  const appearFromLeft = useSpring({
    x: showToast ? 0 : -600,
    delay: 2 * 1000,
    config: config.slow
  });

  useEffect(() => {
    const getCurrentMusic = async () => {
      const { data } = await axios.get('/api/spotify');
      if (data.song.name !== spotifyMusic?.song?.name) setSpotifyMusic(data);
    };

    getCurrentMusic();
    setInterval(getCurrentMusic, 30 * 1000);
  }, [spotifyMusic]);

  useEffect(() => {
    if (!spotifyMusic.is_playing) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 10 * 1000);
  }, [spotifyMusic]);

  return spotifyMusic.is_playing ? (
    <animated.button className={styles.toast} style={appearFromLeft}>
      <div className={styles.details}>
        <strong>
          <IHeadphones />
          Now Listening
        </strong>
        <span className={styles.song}>
          <a href={spotifyMusic.song.spotify_url} target="_blank" rel="noopener noreferrer">
            {spotifyMusic.song.name}
          </a>
        </span>
        {spotifyMusic.artists.map(({ name, spotify_url }, i) => (
          <span key={i}>
            <a href={spotify_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </span>
        ))}
        <span>
          <a href={spotifyMusic.album.spotify_url} target="_blank" rel="noopener noreferrer">
            {spotifyMusic.album.name}
          </a>
        </span>
        <a href="https://developer.spotify.com/" target="_blank" rel="noopener noreferrer">
          <LogoSpotify className={styles.logo} />
        </a>
      </div>
      <div className={styles.cover}>
        <a href={spotifyMusic.song.spotify_url} target="_blank" rel="noopener noreferrer">
          <IPlay />
          <Image
            src={spotifyMusic.album.images[1].url}
            width="120"
            height="120"
            quality="70"
            alt={spotifyMusic.album.name}
          />
        </a>
      </div>
    </animated.button>
  ) : (
    <div>no music</div>
  );
}
