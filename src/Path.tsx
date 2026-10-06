
interface PathProps {
    children: React.Node | string;
    pattern: RegExp;
}

const Path = ({children, pattern}: PathProps) => {
  return (
    pattern.test(window.location.href) && children
  );
}

export default Path;
