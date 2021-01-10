const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://fiveminutesread.netlify.app';
export default server;