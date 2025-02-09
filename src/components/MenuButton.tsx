import type { FC } from 'react';

type Props = {
  tag: MyTag;
  isPressed: boolean;
  handleClick: (tag: string) => void;
};

const MenuButton: FC<Props> = ({ tag, isPressed, handleClick }) => {
  return (
    <button
      aria-pressed={isPressed}
      className='m-1 rounded-lg border-2 border-black px-3 py-1 font-montserrat text-xs hover:bg-neutral-200 aria-pressed:bg-black aria-pressed:text-white aria-pressed:hover:bg-black aria-pressed:hover:text-white md:text-base'
      onClick={() => handleClick(tag.value)}
    >
      {tag.label}
    </button>
  );
};

export default MenuButton;
