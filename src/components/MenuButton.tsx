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
      className='m-1 rounded-3xl bg-neutral-200 px-3 py-2 font-montserrat text-xs font-neutral hover:bg-neutral-200 aria-pressed:bg-neutral-600 aria-pressed:text-white aria-pressed:hover:bg-green-900 sm:text-sm md:text-base'
      onClick={() => handleClick(tag.value)}
    >
      {tag.label}
    </button>
  );
};

export default MenuButton;
