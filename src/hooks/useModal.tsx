import { useState } from 'react';

interface ReturnProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function useModal(): ReturnProps {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function toggleMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  return {
    isMenuOpen,
    toggleMenu,
  };
}
