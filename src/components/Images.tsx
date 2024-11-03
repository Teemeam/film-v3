import type { FC } from 'react';

/* Components */
import Image from './Image';

/* Prop types */
type Props = {
  data: FormattedData[];
};

const Images: FC<Props> = ({ data }) => {
  const images = data.map((dataItem, i) => <Image key={`image-_${i}`} data={dataItem} />);

  return <div>{images}</div>;
};

export default Images;
