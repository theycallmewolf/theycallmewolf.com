import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { body } = req;
  const { phone, message } = body;
  console.log({ phone, message });

  // Download the helper library from https://www.twilio.com/docs/node/install
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  const conversationResponse = await client.conversations.conversations.create({
    friendlyName: 'My First Conversation'
  });

  const { sid } = conversationResponse;

  const participant = await client.conversations.conversations(sid).participants.create({
    'messagingBinding.address': process.env.PERSONAL_PHONE,
    'messagingBinding.proxyAddress': process.env.TWILIO_PHONE
  });

  console.log({
    conversationResponse,
    participant,
    numb: process.env.PERSONAL_PHONE,
    twilioNumb: process.env.TWILIO_PHONE
  });

  res.status(200).json({
    conversationResponse,
    participant
  });
};
