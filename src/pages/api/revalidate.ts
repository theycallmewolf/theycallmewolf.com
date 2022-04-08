/**
 * @see https://youtu.be/kdXKz1UWc3E?t=1558
 */

export default async (req, res) => {
  for (const url of req.body) {
    await res.unstable_revalidate(url);
  }
  res.status(200).json({ revalidate: true });
};
