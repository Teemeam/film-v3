import type { FC } from 'react';
import tags from '~/lib/tags';

/* Components */
import MenuButton from './MenuButton';

type Props = {
  selected: string[];
  handleClick: (tag: string) => void;
  handleReset: () => void;
};

const Menu: FC<Props> = ({ selected, handleClick, handleReset }) => {
  return (
    <div className='my-xl w-full text-center'>
      <div className='mx-auto w-11/12'>
        <details>
          <summary className='mx-auto w-fit cursor-pointer font-montserrat font-medium'>
            Filter
          </summary>

          {/**
           * Film buttons
           */}
          <div className='my-base'>
            {tags[0]?.map((tag, i) => (
              <MenuButton
                key={`f-button_${i}`}
                tag={tag}
                isPressed={selected.includes(tag.value)}
                handleClick={handleClick}
              />
            ))}
          </div>

          {/**
           * Camera buttons
           */}
          <div className='my-base'>
            {tags[1]?.map((tag, i) => (
              <MenuButton
                key={`c-button_${i}`}
                tag={tag}
                isPressed={selected.includes(tag.value)}
                handleClick={handleClick}
              />
            ))}
          </div>

          {/**
           * Reset button
           */}
          <div className='my-base'>
            <button
              className='m-1 rounded-lg border-2 border-black px-3 py-1 font-montserrat text-sm'
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Menu;
