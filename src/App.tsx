import {useState} from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import NavButton from './NavButton';
import Path from './Path';

function App() {
  const [url, setUrl] = useState(window.location.pathname);

  return (
    <>
      <section id="center">
        <header className="hero">
          <a id='title' href='/'><h1>Lilly's Orchard</h1></a>
        </header>
        <nav className='top-nav'>
          <NavButton name='Blog' url='/blog' />
          <NavButton name='About' url='/about' />
          <NavButton name='Contact' url='/contact' />
        </nav>
        <main>
          <Path pattern={/blog/}>This is the 'blog' section</Path>
          <Path pattern={/about/}>This is the 'about' section</Path>
          <Path pattern={/contact/}>This is the 'contact' section</Path>
          <Path pattern={/\/$/}>Home</Path>
        </main>
      </section>

      <p>Current url: {url}</p>
    </>
  )
}

export default App
