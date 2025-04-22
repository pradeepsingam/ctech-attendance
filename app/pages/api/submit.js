import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../convex/_generated/api';

const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    await client.mutation(api.forms.submitForm, data);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
