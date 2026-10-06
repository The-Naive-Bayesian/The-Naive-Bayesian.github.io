
interface PathProps {
    children: React.Node | string;
    pattern: RegExp;
}

const Path = ({children, pattern}: PathProps) => {
  return (
    pattern.test(window.location.pathname) && children
  );
}

export default Path;
