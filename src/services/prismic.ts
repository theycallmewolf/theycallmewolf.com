import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';
import { RichText } from 'prismic-dom';
import type {
  ActivityData,
  CareerData,
  ClientData,
  EducationData,
  GraphData,
  IntroData,
  NextProject,
  PostData,
  ProjectData,
  ProjectDetails,
  SkillData,
  TestimonialData
} from 'types';
import { formatDate } from 'utils/format-date';

type IntroProps = {
  area: 'work' | 'about';
};

type GetProjectProps = {
  uid: string | string[];
};

type GetPosts = () => Promise<PostData[]>;
type GetProjects = () => Promise<ProjectData[]>;
type GetProject = ({ uid }: GetProjectProps) => Promise<ProjectDetails>;
type GetNextProject = () => Promise<NextProject[]>;
type GetClients = () => Promise<ClientData[]>;
type GetTestimonials = () => Promise<TestimonialData[]>;
type GetSkills = () => Promise<GraphData[]>;
type GetIntro = (props: IntroProps) => Promise<IntroData[]>;
type GetActivityContent = () => Promise<ActivityData[]>;
type GetCareerContent = () => Promise<CareerData[]>;
type GetEducationContent = () => Promise<EducationData[]>;
type GetSkillsContent = () => Promise<SkillData[]>;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}

const prismic = getPrismicClient();

export const getPosts: GetPosts = async () => {
  const response = await prismic.query(Prismic.predicates.at('document.type', 'posts'), {
    orderings: '[document.last_publication_date]',
    fetch: ['posts.title', 'posts.lead', 'posts.content'],
    pageSize: 2,
    lang: 'en-us'
  });

  return response.results.map(
    ({ id, uid, data, first_publication_date, last_publication_date }) => {
      const { title, lead } = data;
      return {
        id,
        slug: uid,
        title: RichText.asText(title),
        lead: RichText.asText(lead),
        publish_date: formatDate(first_publication_date),
        update_date: formatDate(last_publication_date)
      };
    }
  );
};

export const getProjects: GetProjects = async () => {
  const response = await prismic.query(Prismic.predicates.at('document.type', 'projects'), {
    orderings: '[my.projects.project_date desc]',
    fetch: [
      'projects.title',
      'projects.image_large',
      'projects.image_small',
      'projects.image_large_2x',
      'projects.image_small_2x',
      'projects.caption',
      'projects.type',
      'projects.highlight',
      'projects.description',
      'projects.project_date',
      'projects.body'
    ],
    lang: 'en-us'
  });

  return response.results.map(({ id, uid, data }) => {
    const {
      type,
      project_date,
      title,
      image_small,
      image_small_2x,
      image_large,
      image_large_2x,
      caption,
      body,
      highlight
    } = data;

    let specs = body?.filter(({ slice_type }) => slice_type === 'technologies').shift() ?? null;
    if (specs) {
      specs = specs.items.map(({ tech }, i: number) => ({
        spec: tech,
        id: i
      }));
    }

    return {
      id,
      type,
      title: RichText.asText(title) ?? null,
      slug: uid,
      project_date: String(new Date(project_date).getFullYear()),
      slider: {
        image_small: image_small.url ?? null,
        image_small_2x: image_small_2x.url ?? (image_small.url || null),
        image_large: image_large.url ?? null,
        image_large_2x: image_large_2x.url ?? (image_large.url || null),
        caption: RichText.asText(caption) ?? null
      },
      highlight,
      specs
    };
  });
};

export const getProject: GetProject = async ({ uid }) => {
  const { id, data } = await prismic.getByUID('projects', String(uid), {});

  const {
    title,
    type,
    project_date,
    description,
    link,
    repository,
    repository_api,
    cover_small,
    cover_small_2x,
    cover_large,
    cover_large_2x,
    caption,
    about,
    body,
    body1
  } = data;

  let specs = body.filter(({ slice_type }) => slice_type === 'technologies').shift() ?? null;

  if (specs) {
    specs = specs.items.map(({ tech }, i: number) => ({
      spec: tech,
      id: i
    }));
  }

  let dependencies = body.filter(({ slice_type }) => slice_type === 'dependencies').shift() ?? null;

  if (dependencies) {
    dependencies = dependencies.items.map(({ url, label }) => ({
      url: url.url,
      label: RichText.asText(label)
    }));
  }

  let leads = body.filter(({ slice_type }) => slice_type === 'leads').shift() ?? null;

  if (leads) leads = leads.items.map(({ lead }) => RichText.asText(lead));

  const project_images = body1
    .filter(({ slice_type }) => slice_type === 'slider')
    .shift()
    .items.map(({ screen_small, screen_small_2x, screen_large, screen_large_2x }, i: number) => ({
      image_small: screen_small.url,
      image_small_2x: screen_small_2x.url ?? (screen_small.url || null),
      image_large: screen_large.url,
      image_large_2x: screen_large_2x.url ?? (screen_large.url || null),
      slug: String(i)
    }));

  return {
    id,
    title: RichText.asText(title),
    type,
    slug: uid[0],
    project_date: project_date,
    description: RichText.asText(description),
    link: link?.url ? link.url : null,
    repository: repository.url ? repository.url : null,
    repository_api: repository_api.url ? repository_api.url : null,
    specs,
    about,
    leads,
    images: {
      cover_small: cover_small.url ?? null,
      cover_small_2x: cover_small_2x.url ?? (cover_small.url || null),
      cover_large: cover_large.url ?? null,
      cover_large_2x: cover_large_2x.url ?? (cover_large.url || null),
      project_images,
      caption: RichText.asText(caption)
    },
    dependencies
  };
};

export const getNextProject: GetNextProject = async () => {
  const response = await prismic.query(Prismic.predicates.at('document.type', 'projects'), {
    fetch: [
      'projects.title',
      'projects.description',
      'projects.highlight',
      'projects.project_date',
      'projects.type',
      'projects.cover_large',
      'projects.cover_large_2x',
      'projects.cover_small',
      'projects.cover_small_2x'
    ],
    pageSize: 12,
    lang: 'en-us'
  });
  return response.results.map(({ id, uid, data }) => {
    const {
      title,
      project_date,
      type,
      cover_large,
      cover_large_2x,
      cover_small,
      cover_small_2x,
      description
    } = data;

    return {
      id,
      type,
      title: RichText.asText(title) ?? null,
      slug: uid,
      project_date: String(new Date(project_date).getFullYear()),
      description: RichText.asText(description),
      images: {
        cover_large: cover_large.url,
        cover_large_2x: cover_large_2x.url,
        cover_small: cover_small.url,
        cover_small_2x: cover_small_2x.url
      }
    };
  });
};

export const getClients: GetClients = async () => {
  const response = await prismic.query(Prismic.predicates.at('document.type', 'clients'), {
    orderings: '[my.clients.name desc]',
    fetch: ['clients.uid', 'clients.name', 'clients.logo_svg', 'clients.link'],
    pageSize: 4
  });

  return response.results.map(({ id, data }) => {
    const { name, logo_svg, link } = data;

    return {
      id,
      name: name[0].text,
      logo_svg: RichText.asText(logo_svg),
      link: link.url ?? null
    };
  });
};

export const getTestimonials: GetTestimonials = async () => {
  const response = await prismic.query(Prismic.predicates.at('document.type', 'testimonials'), {
    orderings: '[document.last_publication_date desc]',
    fetch: ['testimonials.quote', 'testimonials.name', 'testimonials.job_title']
  });

  return response.results.map(({ id, first_publication_date, last_publication_date, data }) => {
    const { name, quote, job_title } = data;

    return {
      id,
      name: RichText.asText(name),
      quote: quote.map(({ text }) => text),
      jobTitle: RichText.asText(job_title),
      publish_date: formatDate(first_publication_date),
      update_date: formatDate(last_publication_date)
    };
  });
};

export const getSkills: GetSkills = async () => {
  const response = await prismic.query(Prismic.Predicates.at('document.type', 'skills_graphs'), {
    orderings: '[my.skills_graphs.highlight_order]',
    fetch: ['testimonials.quote', 'testimonials.name', 'testimonials.job_title']
  });
  return response.results
    .filter(({ data }) => data.highlight)
    .map(({ id, data }) => {
      const { title, percentage, category } = data;
      return {
        id,
        title: RichText.asText(title),
        percentage,
        category
      };
    });
};

export const getIntro: GetIntro = async ({ area }) => {
  const response = await prismic.query(Prismic.Predicates.at('document.type', 'intro'), {
    orderings: '[my.intro.order]'
  });
  return response.results
    .filter(({ data }) => data.type === area)
    .map(({ data }) => {
      const { title, lead, link } = data;

      return {
        lead: RichText.asText(lead),
        title: RichText.asText(title),
        link_list: [
          {
            link: RichText.asText(link),
            label: RichText.asText(title).toLowerCase()
          }
        ]
      };
    });
};

export const getActivityContent: GetActivityContent = async () => {
  const response = await prismic.query(Prismic.Predicates.at('document.type', 'activities'), {
    orderings: '[my.activities.order]'
  });

  return response.results.map(({ id, data }) => {
    const { icon, title, description } = data;
    return {
      id,
      icon,
      title: RichText.asText(title),
      description: RichText.asText(description)
    };
  });
};

export const getCareerContent: GetCareerContent = async () => {
  const response = await prismic.query(Prismic.Predicates.at('document.type', 'career'), {
    orderings: '[my.career.date_start desc]'
  });

  return response.results.map(({ id, data }) => {
    const { logo_svg, name, date_start, date_end, title, description } = data;
    return {
      id,
      logo_svg: RichText.asText(logo_svg),
      name: RichText.asText(name),
      year_start: new Date(date_start).getFullYear(),
      year_end: date_end ? new Date(date_end).getFullYear() : null,
      title: RichText.asText(title),
      description: RichText.asText(description)
    };
  });
};

export const getEducationContent: GetEducationContent = async () => {
  const response = await prismic.query(Prismic.Predicates.at('document.type', 'education'), {
    orderings: '[my.career.date_start desc]'
  });

  return response.results.map(({ id, data }) => {
    const { logo_svg, name, date_start, date_end, title, description } = data;
    return {
      id,
      logo_svg: RichText.asText(logo_svg),
      name: RichText.asText(name),
      year_start: new Date(date_start).getFullYear(),
      year_end: new Date(date_end).getFullYear(),
      title: RichText.asText(title),
      description: RichText.asText(description)
    };
  });
};

export const getSkillsContent: GetSkillsContent = async () => {
  const getCategories = async () => {
    const response = await prismic.query(
      Prismic.Predicates.at('document.type', 'skills_categories'),
      {
        orderings: '[my.skills_categories.order]'
      }
    );
    return response.results.map(({ data, id }) => {
      const { title, description } = data;
      return {
        id,
        title: RichText.asText(title),
        description: RichText.asText(description)
      };
    });
  };

  const getGraphs = async () => {
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'skills_graphs'));
    return response.results.map(({ id, data }) => {
      const { title, percentage, category } = data;
      return {
        id,
        title: RichText.asText(title),
        percentage,
        category
      };
    });
  };

  const categories = await getCategories();
  const graphs = await getGraphs();

  return categories.map(({ id, title, description }) => ({
    id: id,
    title: title,
    description: description,
    graphs: graphs.filter(({ category }) => category === title)
  }));
};
