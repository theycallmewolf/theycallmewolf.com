import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
import { RichText } from 'prismic-dom';

interface ContentProps {
  type: string;
  fields: string[];
  quantity?: number;
}

interface Content {
  id: string;
  slug: string;
  title: string | null;
  lead: string | null;
  image: string | null;
  caption: string | null;
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

  const response = await prismic.query(Prismic.predicates.at('document.type', type), {
    fetch: fields,
    pageSize: quantity
  });

  return response.results.map((result) => {
    return {
      id: result.id,
      slug: result.slugs[0],
      title: result.data.title ? RichText.asText(result.data.title) : null,
      lead: result.data.lead ? RichText.asText(result.data.lead) : null,
      image: result.data.image?.url ? result.data.image.url : null,
      caption: result.data.caption ? RichText.asText(result.data.caption) : null,
      name: result.data.name ? RichText.asText(result.data.name) : null,
      logoSVG: result.data.logo_svg ? RichText.asText(result.data.logo_svg) : null,
      link: result.data.link?.url ? result.data.link.url : null,
      quote: result.data.quote ? RichText.asText(result.data.quote) : null,
      jobTitle: result.data.job_title ? RichText.asText(result.data.job_title) : null,
      publishDate: formatDate(result.first_publication_date),
      updateDate: formatDate(result.last_publication_date)
    };
  });
}
