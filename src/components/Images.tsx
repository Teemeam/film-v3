import type { FC } from 'react';

/* Components */
import Image from './Image';

type Props = {
  data: FormattedData[];
};

const Images: FC<Props> = ({ data }) => {
  const images = data.map((dataItem, i) => <Image key={`image_${i}`} data={dataItem} />);

  return <div className='relative mx-auto block w-full max-w-5xl'>{images}</div>;
};

export default Images;
