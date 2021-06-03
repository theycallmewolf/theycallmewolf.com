import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse): void => {
  const projects = [
    {
      id: 1,
      title: 'BAÚ',
      imageURL: '/assets/img/cover-about.jpg',
      caption: '2019, BAÚ, academic project at etic_'
    },
    {
      id: 2,
      title: 'Onlive',
      imageURL: '/assets/img/footer.jpg',
      caption: '2019, Onlive, Cenas academic project at etic_'
    },
    {
      id: 3,
      title: 'Watch',
      imageURL: '/assets/img/cover-bytes.jpg',
      caption: '2020, Watch, testing webpack'
    },
    {
      id: 4,
      title: 'Wheel Of Fortune',
      imageURL: '/assets/img/cover-work.jpg',
      caption: '2020, Wheel Of Fortune, testing JS'
    }
  ];

  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  response.end(JSON.stringify({ message: 'success', projects }));
};

// http://localhost:3000/api/projects
