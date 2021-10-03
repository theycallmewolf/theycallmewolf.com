import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;

const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const endpoints = {
  now_playing: 'https://api.spotify.com/v1/me/player/currently-playing',
  token: 'https://accounts.spotify.com/api/token'
};

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const api = axios.create({
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const { data } = await api.post(
    endpoints.token,
    querystring.stringify({ grant_type: 'refresh_token', refresh_token })
  );

  return { access_token: data.access_token };
};

export const getNowPlaying = async (): Promise<any> => {
  const { access_token } = await getAccessToken();

  const api = axios.create({
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  const response = await api.get(endpoints.now_playing);
  return response;
};

export default async function spotifySong(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ is_playing: false });
  }

  const { item } = response.data;
  const album = {
    name: item.album.name,
    images: item.album.images,
    release_date: item.album.release_date,
    spotify_url: item.album.external_urls.spotify
  };
  const artists = item.artists.map(({ name, external_urls }) => ({
    name,
    spotify_url: external_urls.spotify
  }));
  const song = {
    name: item.name,
    duration_ms: item.duration_ms,
    spotify_url: item.external_urls.spotify,
    popularity: item.popularity,
    preview_url: item.preview_url
  };

  return res.status(200).json({ is_playing: true, song, album, artists });
}
