import { ICross, IHeadphones, IPlay } from 'assets/icons';
import axios from 'axios';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

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
    delay: 0 * 1000,
    config: config.slow
  });

  const getCurrentMusic = useCallback(async () => {
    const { data } = await axios.get('/api/spotify');
    const { is_playing } = data;
    if (is_playing) setSpotifyMusic(data);
  }, []);

  useEffect(() => {
    setInterval(getCurrentMusic, 10 * 1000);
  }, [getCurrentMusic]);

  useEffect(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 10 * 1000);
  }, [spotifyMusic?.song?.name]);

  return spotifyMusic.is_playing ? (
    <animated.div className={styles.toast} style={appearFromLeft}>
      <button
        className={styles.close}
        onClick={() => setShowToast(false)}
        aria-label="Close"
        title="Close">
        <ICross />
      </button>
      <div className={styles.details}>
        <strong>
          <IHeadphones />
          {`On Wolf's headphones`}
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
        <a
          href="https://developer.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Spotify For Developers website">
          <LogoSpotify className={styles.logo} />
        </a>
      </div>
      <div className={styles.cover}>
        <a
          href={spotifyMusic.song.spotify_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`listen "${spotifyMusic.album.name}" album on Spotify`}>
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
    </animated.div>
  ) : (
    <div>no music</div>
  );
}
