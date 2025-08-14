import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Hero from './components/hero'
import Footer from './components/footer'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />

      <Element name="Home">
        <section className='bg-[url(public/bgplayalone.png)] h-[781px] w-full bg-cover bg-center text-white'>
          <div className='flex flex-col justify-center h-full p-8 w-64'>
            <h1 className='text-3xl font-bold'>PlayALONE</h1>
            <p className='text-2xl'>is a passionate indie game development team dedicated to crafting unique, story-driven experiences</p>
          </div>
        </section>
      </Element>
      <Element name="Ta-Khon">
        <section className='bg-black-figma text-white p-8'>
          <h1>Ta-Khon</h1>
          <p>This is the content of TaKhon</p>
        </section>
      </Element>
      <Element name="Contact">
        <section className='bg-black-figma text-white p-8'>
          <h1>Contact</h1>
          <p>This is the content of Contact</p>
        </section>
      </Element>
      <Footer />
    </>
  )
}

export default App
