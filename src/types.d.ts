interface Project {
  id: string;
  type: 'code' | 'illustration' | 'design' | 'other';
  title: string;
  slug: string;
  project_date: string;
}

export interface ProjectImages {
  image_large_2x: string;
  caption?: string;
}

export interface ProjectData extends Project {
  description?: string;
  slider: ProjectImages;
  highlight: boolean;
  specs?: SpecData[];
}

interface DependenciesData {
  label: string;
  url: string;
}

export interface ProjectDetails extends Project {
  description: string;
  link: string;
  repository: string;
  repository_api: string;
  about: AboutData[];
  specs: SpecData[];
  leads: string[];
  images: {
    cover_large_2x: string;
    project_images: ProjectImages[];
    caption?: string;
  };
  dependencies: DependenciesData[];
}

export interface NextProject extends Project {
  description: string;
  images: {
    cover_large_2x: string;
  };
}

export type ClientData = {
  id: string;
  name: string;
  logo_svg: string;
  link: string;
};

export type PostData = {
  id: string;
  title: string;
  lead: string;
  slug: string;
  publish_date: string;
  update_date: string;
};

export type TestimonialData = {
  id: string;
  quote: string;
  name: string;
  jobTitle: string;
  publish_date: string;
  update_date: string;
};

export type AboutData = { id: string; type: string; text: string };
export type LinkData = { link: string; label: string };
export type SpecData = { id: string; spec: string };
export type IntroData = { title: string; lead: string; link_list: LinkData[] };
export type GraphData = {
  id: string;
  title: string;
  percentage: number;
  category: string;
};

export type ActivityData = {
  id: string;
  icon: 'ui' | 'dev' | 'design' | 'illustration';
  title: string;
  description: string;
};

export type CareerData = {
  id: string;
  logo_svg: string;
  name: string;
  year_start: number;
  year_end: number;
  title: string;
  description: string;
};

export type EducationData = CareerData;

export type SlideData = {
  slider: ProjectImages;
  slug: string;
  title?: string;
};

export type SkillData = {
  id: string;
  title: string;
  description: string;
  graphs: GraphData[];
};

export interface EmailData {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export interface IntroProps extends React.HTMLAttributes<HTMLElement> {
  link_list: LinkData[];
  title: string;
  lead: string;
}

export interface ProjectProps {
  project: ProjectDetails;
  nextProjects?: NextProject[];
}

export interface AboutProps {
  intro: IntroData;
  link_list: LinkData[];
  activity: ActivityData[];
  career: CareerData[];
  education: EducationData[];
  skills: SkillData[];
}

export interface BlogProps {
  posts: PostData[];
}

export interface ClientsProps {
  clients: ClientData[];
}

export interface SliderProps extends React.HTMLAttributes<HTMLElement> {
  slides?: SlideData[];
  testimonials?: TestimonialData[];
  contentType: 'image' | 'testimonial';
  className?: string;
  hasLink?: boolean;
  hasIcon?: boolean;
}

type IntroData = {
  title: string;
  lead: string;
  link_list: LinkData[];
};

export interface AsideProps {
  imageURL: string;
  intro: IntroData;
  link_list: LinkData[];
}

export interface CardListProps {
  children: React.ReactNode;
  slug: string | string[];
}

export interface HomeProps {
  projects: ProjectData[];
  clients: ClientData[];
  posts: PostData[];
  testimonials: TestimonialData[];
  skills: GraphData[];
}
