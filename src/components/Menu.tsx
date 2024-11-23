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
          <summary className='cursor-pointer font-montserrat font-medium'>Filter</summary>

          {/**
           * Film buttons
           */}
          <div className='my-sm'>
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
          <div className='my-sm'>
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
          <div className='my-sm'>
            <button
              className='rounded-3xl bg-neutral-300 px-5 py-2.5 font-montserrat text-xs font-light text-green-900 hover:bg-neutral-400 sm:text-sm md:text-base'
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
