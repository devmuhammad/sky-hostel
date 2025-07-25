import { useEffect, RefObject, SetStateAction, Dispatch } from "react";

export const useClickOutside = (refObject: RefObject<HTMLDivElement | null>, setShow: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (refObject.current && !refObject.current.contains(event.target as Node)) {
      setShow(false);
    }
  };
}
