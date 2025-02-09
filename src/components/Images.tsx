import { type FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/* Components */
import Image from './Image';
import Menu from './Menu';

type Props = {
  data: FormattedData[];
};

const Images: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [renderBuffer, setRenderBuffer] = useState<number>(5);
  const [isInView, setIsInView] = useState<boolean>(false);

  /**
   * Determine if loading text is in the viewport
   */
  const [loadingRef, inView] = useInView({
    threshold: 0,
  });

  /**
   * Increase the render buffer if needed
   */
  if (inView !== isInView) {
    if (inView) {
      if (renderBuffer < data.length) {
        setRenderBuffer(renderBuffer + 10);
      }
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }

  /**
   * Filter data
   */
  const filteredData =
    selected.length > 0
      ? data.filter((dataItem) => dataItem.tags.some((tag) => selected.includes(tag)))
      : data;

  const images = filteredData
    .map((dataItem, i) => <Image key={`image_${i}`} data={dataItem} />)
    .slice(0, renderBuffer);

  /**
   * Handle menu button click
   */
  const handleClick = (tag: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(tag)
        ? prevSelected.filter((item) => item !== tag)
        : [...prevSelected, tag]
    );
  };

  /**
   * Clear selected
   */
  const handleReset = () => {
    setSelected([]);
  };

  return (
    <div>
      {/**
       * Menu
       */}
      <Menu selected={selected} handleClick={handleClick} handleReset={handleReset} />

      {/**
       * Images
       */}
      <div className='mx-auto w-full max-w-5xl'>{images}</div>

      {/**
       * Loading text
       */}
      <p
        ref={loadingRef}
        className={`mx-auto w-11/12 text-center font-montserrat text-sm font-thin ${
          renderBuffer >= filteredData.length ? 'hidden' : 'block'
        }`}
      >
        Loading...
      </p>
    </div>
  );
};

export default Images;
