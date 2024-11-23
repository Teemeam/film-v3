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
      className='m-1 rounded-3xl bg-neutral-100 px-5 py-2.5 font-montserrat text-xs font-light text-green-900 hover:bg-neutral-200 aria-pressed:bg-green-900 aria-pressed:text-white aria-pressed:hover:bg-green-900 sm:text-sm md:text-base'
      onClick={() => handleClick(tag.value)}
    >
      {tag.label}
    </button>
  );
};

export default MenuButton;
