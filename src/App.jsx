import './App.css'
import Navbar from './components/nav'
import Footer from './components/footer'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className='bg-[url(/bgplayalone.png)] h-screen w-screen bg-cover bg-center text-white'>
      <Navbar />
      <Element name="Home" className='flex h-full items-center p-8 w-full'>
            <div className='flex flex-col w-full justify-center p-8'><h1 className='text-3xl font-bold'>PlayALONE</h1>
              <p className='text-2xl'>is a passionate indie game</p>
                <p>development team dedicated to</p>
                <p>crafting unique, story-driven</p>
                <p>experiences</p>
              <button className='text-3xl p-2 bg-highlight rounded-2xl mt-10 w-50'>Follow us</button>
                
                </div>
            <div className='flex flex-col w-full'></div>
      </Element>
      <Footer />
    </div>
  )
}

export default App
