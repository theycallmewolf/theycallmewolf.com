import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
import { RichText } from 'prismic-dom';

interface ContentProps {
  type: string;
  fields: string[];
  quantity?: number;
}

type SliderData = {
  image_large: string;
  image_small: string;
  caption: string;
};

interface Content {
  id: string;
  slug: string;
  title: string | null;
  lead: string | null;
  image: string | null;
  slider: SliderData | null;
  name: string | null;
  logoSVG: string | null;
  link: string | null;
  quote: string | null;
  jobTitle: string | null;
  publishDate: string;
  updateDate: string;
}

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}

export async function getContent({
  type,
  fields,
  quantity = 20
}: ContentProps): Promise<Content[]> {
  const prismic = getPrismicClient();

  function formatDate(data: string): string {
    return new Date(data).toLocaleDateString('pt-PT', {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  const { results } = await prismic.query(Prismic.predicates.at('document.type', type), {
    fetch: fields,
    pageSize: quantity
  });

  // console.log(JSON.stringify(response, null, 2));

  return results.map((result) => {
    const { id, uid, data, first_publication_date, last_publication_date } = result;
    const {
      title,
      lead,
      image,
      image_large,
      image_small,
      caption,
      name,
      logo_svg,
      link,
      quote,
      job_title
    } = data;

    return {
      id,
      slug: uid,
      title: title ? RichText.asText(title) : null,
      lead: lead ? RichText.asText(lead) : null,
      image: image?.url ? image.url : null,
      slider: {
        image_large: image_large?.url ? image_large.url : null,
        image_small: image_small?.url ? image_small.url : null,
        caption: caption ? RichText.asText(caption) : null
      },
      name: name ? RichText.asText(name) : null,
      logoSVG: logo_svg ? RichText.asText(logo_svg) : null,
      link: link?.url ? link.url : null,
      quote: quote ? RichText.asText(quote) : null,
      jobTitle: job_title ? RichText.asText(job_title) : null,
      publishDate: formatDate(first_publication_date),
      updateDate: formatDate(last_publication_date)
    };
  });
}
