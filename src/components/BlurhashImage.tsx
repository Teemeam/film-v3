import type { FC } from 'react';
import { Blurhash } from 'react-blurhash';

/* Prop types */
type Props = {
  blurhash: string;
};

const BlurhashImage: FC<Props> = ({ blurhash }) => {
  return (
    <Blurhash
      className='absolute left-0 top-0'
      hash={blurhash}
      width={'100%'}
      height={'100%'}
      resolutionX={32}
      resolutionY={32}
      punch={1}
    />
  );
};

export default BlurhashImage;
