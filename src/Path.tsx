import type {JSX} from 'react';

interface PathProps {
    children: JSX.Element | JSX.Element[] | string;
    pattern: RegExp;
}

const Path = ({children, pattern}: PathProps) => {
  return (
    pattern.test(window.location.pathname) && children
  );
}

export default Path;
