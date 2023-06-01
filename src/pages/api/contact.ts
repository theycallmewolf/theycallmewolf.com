import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { subject, message, name /* email */ } = req.body;
  const msg = {
    to: process.env.PERSONAL_EMAIL_ADDRESS,
    from: process.env.SITE_EMAIL_ADDRESS,
    subject,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(202).json({ message: `Email has been sent`, success: true });
  } catch (error) {
    res
      .status(error.code)
      .json({ message: error.response.body.errors[0].message, success: false });
  }
};
