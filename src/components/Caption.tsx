import type { FC } from 'react';

/* Prop types */
type Props = {
  description: FormattedDescription;
};

const Caption: FC<Props> = ({ description }) => {
  return (
    <div className='mt-2.5'>
      <p className='mb-1 font-montserrat text-sm font-thin'>{description.film}</p>
      <p className='font-montserrat text-sm font-thin'>{description.camera}</p>
    </div>
  );
};

export default Caption;
