import Navbar from './Components/Navbar';
import './App.css';
import Hero from './Components/Hero';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Dropdown from './Components/Dropdown';
import { useState, useEffect } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default App;
