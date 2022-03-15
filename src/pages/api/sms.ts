import { NextApiRequest, NextApiResponse } from 'next';
import Twilio from 'twilio';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  /**
   * Download the helper library from @see https://www.twilio.com/docs/node/install
   * Find your Account SID and Auth Token @see https://twilio.com/console
   * and set the environment variables. @see http://twil.io/secure
   */
  const { phone, message } = req.query;

  if (!phone || !message)
    return res.status(500).json({ message: 'no phone number and message received' });

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = Twilio(accountSid, authToken);

  try {
    const messageResponse = await client.messages.create({
      body: `${message}`,
      from: process.env.TWILIO_PHONE,
      to: `${phone}`
    });
    return res.status(200).json(messageResponse);
  } catch (error) {
    return res.status(error.status).json(error);
  }
};
