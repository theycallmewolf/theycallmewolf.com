import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
import { RichText } from 'prismic-dom';

import { formatDate } from '../utils';

interface ContentProps {
  type: string;
  fields: string[];
  quantity?: number;
}

type SpecsData = { id: string; spec: string };
type ProjectImagesData = { id: string; image_small: string; image_large: string };

interface ContentData {
  id: string;
  slug: string;
  type: 'code' | 'illustration' | 'design' | 'other';
  title: string | null;
  lead: string | null;
  highlight: boolean;
  description: string | null;
  images: {
    image: string | null;
    slider: {
      image_large: string | null;
      image_small: string | null;
      caption: string | null;
    };
    projectImages: ProjectImagesData[];
  };
  specs: SpecsData[];
  name: string | null;
  logoSVG: string | null;
  links: {
    link: string | null;
    repository: string | null;
    repository_api: string | null;
  };
  quote: string | null;
  jobTitle: string | null;
  dates: {
    publishDate: string;
    updateDate: string;
    projectDate: string;
  };
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
}: ContentProps): Promise<ContentData[]> {
  const prismic = getPrismicClient();

  const response = await prismic.query(Prismic.predicates.at('document.type', type), {
    fetch: fields,
    pageSize: quantity
  });

  // console.log(JSON.stringify(response, null, 2));

  return response.results.map((result) => {
    const { id, uid, data, first_publication_date, last_publication_date } = result;
    const {
      title,
      lead,
      description,
      image,
      image_large,
      image_small,
      caption,
      name,
      logo_svg,
      link,
      repository,
      repository_api,
      project_date,
      quote,
      job_title,
      type,
      body,
      body1,
      cover_small,
      cover_large,
      highlight
    } = data;

    const specs =
      type === 'code'
        ? body
            .filter(({ slice_type }) => slice_type === 'technologies')[0]
            .items.map(({ tech }, i: number) => ({
              spec: tech,
              id: i
            }))
        : null;

    const projectImages =
      type === 'code'
        ? body1
            .filter(({ slice_type }) => slice_type === 'slider')[0]
            .items.map(({ screen_small, screen_large }, i: number) => ({
              image_small: screen_small.url,
              image_large: screen_large.url,
              slug: String(i)
            }))
        : null;

    return {
      id,
      slug: uid,
      type: type ? type : null,
      title: title ? RichText.asText(title) : null,
      lead: lead ? RichText.asText(lead) : null,
      highlight: highlight ? highlight : false,
      description: description ? RichText.asText(description) : null,
      images: {
        image: image?.url ? image.url : null,
        cover_small: cover_small ? cover_small.url : null,
        cover_large: cover_large ? cover_large.url : null,
        slider: {
          image_large: image_large ? image_large.url : null,
          image_small: image_small ? image_small.url : null,
          caption: caption ? RichText.asText(caption) : null
        },
        projectImages: projectImages ? projectImages : null
      },
      specs: specs ? specs : null,
      name: name ? RichText.asText(name) : null,
      logoSVG: logo_svg ? RichText.asText(logo_svg) : null,
      links: {
        link: link?.url ? link.url : null,
        repository: repository?.url ? repository.url : null,
        repository_api: repository_api?.url ? repository_api.url : null
      },
      quote: quote ? RichText.asText(quote) : null,
      jobTitle: job_title ? RichText.asText(job_title) : null,
      dates: {
        publishDate: formatDate(first_publication_date),
        updateDate: formatDate(last_publication_date),
        projectDate: formatDate(project_date)
      }
    };
  });
}
