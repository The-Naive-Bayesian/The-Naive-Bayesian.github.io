import {useState} from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import NavButton from './NavButton';
import Path from './Path';
import BlogPreviewList from './BlogPreviewList';

function App() {
  const [url, setUrl] = useState(window.location.pathname);
  const [previews, setPreviews] = useState([{
    id: 1,
    title: 'Hello, world!',
    preview: 'Testing out writing posts on this thing. I hope it works ok! I would love to have a good place to jot down my thoughts from time to time.'
  }])

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
          <Path pattern={/blog/}>
            <>
              <p>This is the 'blog' section</p>
              <BlogPreviewList previews={previews} />
            </>
          </Path>
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
