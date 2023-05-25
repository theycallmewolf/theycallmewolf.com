import { NextApiRequest, NextApiResponse } from "next";
import * as nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";

/**
 * @doc https://unsplash.com/documentation#creating-a-developer-account
 * @dco https://github.com/unsplash/unsplash-js#usage
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  global.fetch = fetch;

  const { query } = req.query;

  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
  });

  // const result = await unsplash.photos.get({ photoId: 'oNz1M40vdn0' });
  // res.status(200).json({ data: result.response });

  try {
    const result = await unsplash.photos.getRandom({
      // collectionIds: ['1394732'],
      query: Array.isArray(query) ? query[0] : query,
      orientation: "landscape",
      count: 12,
    });

    if (result.errors) {
      if (result.errors[0] === "No photos found.") {
        const result = await unsplash.photos.getRandom({
          // collectionIds: ['1394732'],
          query: "abstract",
          orientation: "landscape",
          count: 12,
        });

        res
          .status(200)
          .json({ results: result.response, message: "No photos found." });
        return;
      }

      console.error("error occurred: ", result.errors[0]);
      res.status(403).json({ error: result.errors[0] });
      return;
    }

    // https://unsplash.com/collections/1394732/abstract

    res.status(200).json({ results: result.response, message: undefined });
  } catch (error) {
    res.status(200).json({ data: null, message: error.message });
  }
};
