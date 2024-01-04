import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { senderMail, name, content } = req.body;

    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE, // replace with your email service
      auth: {
        user: process.env.EMAIL, // replace with your email
        pass: process.env.PASSWORD, // replace with your password
      },
    });

    try {
      await transporter.sendMail({
        from: senderMail,
        to: process.env.EMAIL,
        subject: `New message from ${name}`,
        text: content,
      });

      return res.status(200).json({ status: 'Ok' });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error: 'Error sending email' });
    }
  }

  return res.status(404).json({ error: 'Not found' });
}
