import { NextApiRequest, NextApiResponse } from 'next';
import * as nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import { NODE_DEV } from 'utils/dev';

/**
 * @doc https://unsplash.com/documentation#creating-a-developer-account
 * @dco https://github.com/unsplash/unsplash-js#usage
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  global.fetch = fetch;

  const { location } = req.query;

  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch
  });

  try {
    const result = await unsplash.photos.trackDownload({
      downloadLocation: Array.isArray(location) ? location[0] : location
    });

    NODE_DEV && console.info('[unsplash.download]', result);
    res.status(200).json({ data: null, message: result.type });
  } catch (error) {
    res.status(200).json({ data: null, message: error.message });
  }
};
