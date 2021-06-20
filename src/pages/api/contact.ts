import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { email, subject, message, name } = req.body;
  console.log(subject);
  const msg = {
    to: email,
    from: 'hello@theycallmewolf.com',
    subject,
    name,
    text: message
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};
