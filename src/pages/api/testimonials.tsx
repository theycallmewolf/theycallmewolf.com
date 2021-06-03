import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse): void => {
  const testimonials = [
    {
      id: 1,
      quote:
        'Mr. Wolf Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
      name: 'Elon Musk',
      jobDescription: 'SpaceX CEO',
      date: '11 May 2021'
    },
    {
      id: 2,
      quote:
        'Mr. Wolf Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
      name: 'Sam Jackson',
      jobDescription: 'American Actor',
      date: '11 May 2021'
    }
  ];

  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  response.end(JSON.stringify({ message: 'success', testimonials }));
};

// http://localhost:3000/api/testimonials
