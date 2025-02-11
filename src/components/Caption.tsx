import type { FC } from 'react';

type Props = {
  description: FormattedDescription;
  dateLabel: string;
};

const Caption: FC<Props> = ({ description, dateLabel }) => {
  return (
    <div className='w-11/12 md:w-5/12'>
      <div className='mx-auto w-full md:w-11/12'>
        <p className='mb-1 text-center font-montserrat text-sm font-medium'>{description.film}</p>
        <p className='mb-2 text-center font-montserrat text-sm font-medium'>{description.camera}</p>
        <p className='text-center font-montserrat text-xs font-thin'>{dateLabel}</p>
      </div>
    </div>
  );
};

export default Caption;
