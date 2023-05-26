import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useSideMenus = () => {
  const [showSideBarLeft, setShowSideBarLeft] = useState(
    window.innerWidth > 820
  );
  const [showSideBarRight, setShowSideBarRight] = useState(
    window.innerWidth > 820
  );

  const leftSideBar = useRef<HTMLDivElement>(null);
  const rightSideBar = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: MouseEvent) => {
    if (window.innerWidth < 820) {
      if (
        leftSideBar.current &&
        !leftSideBar.current.contains(target as Node)
      ) {
        setShowSideBarLeft(false);
      }

      if (
        rightSideBar.current &&
        !rightSideBar.current.contains(target as Node)
      ) {
        setShowSideBarRight(false);
      }
    }
  };

  useLayoutEffect(() => {
    const resize = () => {
      if (window.innerWidth < 820) {
        setShowSideBarLeft(false);
        setShowSideBarRight(false);
      } else {
        setShowSideBarLeft(true);
        setShowSideBarRight(true);
      }
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const onLeftSideBarOpen = () => {
    setShowSideBarLeft(true);
    setShowSideBarRight(false);
  };

  const onRightSideBarOpen = () => {
    setShowSideBarLeft(false);
    setShowSideBarRight(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [
    {
      ref: leftSideBar,
      isOpen: showSideBarLeft,
      onOpen: onLeftSideBarOpen,
    },
    {
      ref: rightSideBar,
      isOpen: showSideBarRight,
      onOpen: onRightSideBarOpen,
    },
  ];
};
