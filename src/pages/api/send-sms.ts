import { NextApiRequest, NextApiResponse } from 'next';
import Twilio from 'twilio';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  const { phone, message } = req.query;

  if (!phone || !message)
    return res.status(500).json({ message: 'no phone number and message received' });

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = Twilio(accountSid, authToken);

  const messageSID = client.messages
    .create({
      body: `${message}`,
      from: process.env.TWILIO_PHONE,
      to: `${phone}`
    })
    .then((message) => {
      return message.sid;
    })
    .catch((err) => console.log(err));

  return res.status(200).json({ messageSID });
};
