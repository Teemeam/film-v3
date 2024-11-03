import type { FC } from 'react';

/* Components */
import { Image as ImageComponent } from './Image';

/* Prop types */
type Props = {
  data: FormattedData[];
};

const Images: FC<Props> = ({ data }) => {
  const images = data.map((dataItem, i) => <ImageComponent key={`image_${i}`} data={dataItem} />);

  return <div className='relative mx-auto block w-11/12 max-w-4xl'>{images}</div>;
};

export default Images;
