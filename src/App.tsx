import {useState} from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [url, setUrl] = useState(window.location.href);

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Lilly's Orchard</h1>
        </div>
        <NavButton name='Blog' url='/blog' />
        <NavButton name='About' url='/about' />
        <NavButton name='Contact' url='/contact' />
      </section>

      <Path pattern={/blog/}>
        This is the blog section
      </Path>

      <p>Current url: {url}</p>
    </>
  )
}

interface NavButtonProps {
    name: string;
    url: string;
}

const NavButton = ({name, url}: props) => {
  return (
    <a href={url}>
      <button
        type="button"
        className="counter"
      >
        <h3 className='link-button'>{name}</h3>
      </button>
    </a>
  )
}

interface PathProps {
    children: React.Node | string;
    pattern: RegExp;
}
const Path = ({children, pattern}: PathProps) => {
  return (
    pattern.test(window.location.href) && children
  );
}

export default App
