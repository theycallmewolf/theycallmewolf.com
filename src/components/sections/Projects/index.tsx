import React from 'react';

import { Slider } from '../../elements/Slider';

type Project = {
  id: number;
  imageURL: string;
  caption: string;
  title: string;
};

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps): JSX.Element {
  return (
    <section>
      <h2>Projects</h2>
      <Slider slides={projects} contentType="image" />
    </section>
  );
}
