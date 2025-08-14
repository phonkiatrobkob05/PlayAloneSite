import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Hero from './components/hero'
import Footer from './components/footer'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className='bg-[url(/bgplayalone.png)] h-screen w-full bg-cover bg-center text-white'>
      <Navbar />
      <Element name="Home">
        <section className=''>
          <div className='flex flex-col justify-center h-full p-4'>
            <h1 className='text-3xl font-bold'>PlayALONE</h1>
            <p className='text-2xl'>is a passionate indie game 
            <p>development team dedicated to</p>
            <p>crafting unique, story-driven</p>
              experiences</p>
            <button className='bg-highlight p-4 w-50 text-4xl font-semibold rounded-2xl mt-10'>Follow Us</button>
          </div>
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default App
