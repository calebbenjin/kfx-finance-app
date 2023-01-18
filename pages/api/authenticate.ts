import { publicFetch } from '@/config/fetch';
import cookie from 'cookie';

const authenticate = async (req: any, res: any) => {
  try {
    if (req.method === 'POST') {

      const {data} = await publicFetch.post(`authenticate`, req.body);
  
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', String(data.token), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      );

      // res.setHeader('access-control-allow-credentials', true);

      res.status(200).json(data);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong.' })
  }
};

export default authenticate;
