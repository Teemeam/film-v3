import { blurhashFromURL } from 'blurhash-from-url';

const encodeImage = async (url: string) => {
  const output = await blurhashFromURL(url);

  return output;
};

export default encodeImage;
