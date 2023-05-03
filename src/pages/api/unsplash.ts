import { NextApiRequest, NextApiResponse } from 'next';
import * as nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

/**
 * @doc https://unsplash.com/documentation#creating-a-developer-account
 * @dco https://github.com/unsplash/unsplash-js#usage
 */

export default async (req: NextApiRequest, res: NextApiResponse) => {
  global.fetch = fetch;

  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch
  });

  // const result = await unsplash.photos.get({ photoId: 'oNz1M40vdn0' });
  // res.status(200).json({ data: result.response });

  try {
    const result = await unsplash.photos.getRandom({
      collectionIds: ['1394732'],
      query: 'abstract',
      orientation: 'landscape',
      count: 12
    });

    if (result.errors) {
      console.error('error occurred: ', result.errors[0]);
      res.status(403).json({ error: result.errors[0] });
      return;
    }

    // https://unsplash.com/collections/1394732/abstract

    res.status(200).json(result.response);
  } catch (error) {
    res.status(200).json({ data: null });
  }
};
