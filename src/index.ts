import server from './server';

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
  console.log(`Server Listening to PORT: ${PORT}`);
});
