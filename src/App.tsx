import {useEffect, useState} from 'react';
import './App.css'

import NavButton from './NavButton';
import Path from './Path';
import BlogPreviewList from './BlogPreviewList';
import ArticleWrapper from './Article';
import About from './About';
import Contact from './Contact';

function App() {
  const [previews] = useState([{
    id: 1,
    title: 'Hello, world!',
    preview: 'Testing out writing posts on this thing. I hope it works ok! I would love to have a good place to jot down my thoughts from time to time.'
  }])

  return (
    <>
      <section id="center">
        <header className="hero">
          <a id='title' href='/blog'><h1>Lilly's Orchard</h1></a>
        </header>
        <nav className='top-nav'>
          <NavButton name='Blog' url='/blog' />
          <NavButton name='About' url='/about' />
          <NavButton name='Contact' url='/contact' />
        </nav>
        <main>
          <Path pattern={/\/$/}><Home /></Path>
          <Path pattern={/blog/}>
            <Path pattern={/blog$/}>
              <BlogPreviewList previews={previews} />
            </Path>
            <Path pattern={/blog\/posts\/\d+/}>
              <ArticleWrapper/>
            </Path>
          </Path>
          <Path pattern={/about/}><About /></Path>
          <Path pattern={/contact/}><Contact /></Path>
          <Path pattern={/\/$/}>Home</Path>
        </main>
      </section>
    </>
  )
}

const Home = () => {
  function redirectToBlog() {
    window.location.replace("/blog");
  }

  useEffect(redirectToBlog);
  return (null);
}

export default App
