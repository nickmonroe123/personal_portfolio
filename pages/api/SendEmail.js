import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const response = await fetch('https://nicks-apis.onrender.com/my-first-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      res.status(500).json({ message: 'Error sending data' });
    } else {
      res.status(200).json({ message: 'Data sent' });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}