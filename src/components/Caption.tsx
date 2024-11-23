import type { FC } from 'react';

/* Prop types */
type Props = {
  description: FormattedDescription;
  dateLabel: string;
};

const Caption: FC<Props> = ({ description, dateLabel }) => {
  return (
    <div className='w-11/12 md:w-5/12'>
      <p className='mb-1 text-center font-montserrat text-sm'>{description.film}</p>
      <p className='mb-2 text-center font-montserrat text-sm'>{description.camera}</p>
      <p className='text-center font-montserrat text-sm font-thin'>{dateLabel}</p>
    </div>
  );
};

export default Caption;
