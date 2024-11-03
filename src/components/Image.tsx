import { type FC, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

/* Components */
import BlurhashImage from './BlurhashImage';
import FullSizeImage from './FullSizeImage';
import Caption from './Caption';

type Props = {
  data: FormattedData;
};

const Image: FC<Props> = ({ data }) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  /**
   * Determine if the image is in the viewport
   */
  const [imageRef, inView] = useInView({
    threshold: 0,
  });

  /**
   * Update the state when the visibility changes
   */
  useEffect(() => {
    if (inView !== isInView) {
      setIsInView(inView);
    }
  }, [inView]);

  return (
    <div ref={imageRef} className='mb-5'>
      <div className={`relative h-0 bg-neutral-200 pb-[${(100 / data.aspectRatio).toFixed(1)}%]`}>
        {/**
         * Blurhash image
         */}
        <BlurhashImage blurhash={data.blurhash} />

        {/**
         * Full-size image
         */}
        <FullSizeImage isInView={isInView} url={data.url} />
      </div>

      {/**
       * Caption
       */}
      <Caption description={data.description} />
    </div>
  );
};

export default Image;
