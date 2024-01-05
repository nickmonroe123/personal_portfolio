import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { text } = req.body;

    const response = await fetch('https://nicks-apis.onrender.com/send_email', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({ text }),
    });

    console.log(response);
    console.log(response.text);

    if (!response.ok) {
      res.status(500).json({ message: 'Error sending data' });
    } else {
      res.status(200).json({ message: 'Data sent' });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}