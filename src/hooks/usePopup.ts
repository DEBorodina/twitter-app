import { useEffect, useRef, useState } from 'react';

export const usePopup = (
  initialState = false
): [
  React.RefObject<HTMLElement>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [showPopup, setShowPopup] = useState(initialState);
  const popUp = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (popUp.current && !popUp.current.contains(e.target as Node)) {
      setShowPopup(false);
    }
    if (showPopup) {
      e.stopPropagation();
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [popUp, showPopup, setShowPopup];
};
