import './App.css'
import Navbar from './components/nav'
import Footer from './components/footer'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className='bg-[url(/bgplayalone.png)] h-screen w-screen bg-cover bg-center text-white'>
      <Navbar />
      <Element name="Home" className='flex h-full items-center p-8 w-full'>
        <div id='left' className='w-full h-full flex justify-center items-center'>
          <div id='Text' className=''>
            <div id='Header' className=''>
              <h1 id='PlayALONE' className='text-3xl font-bold'>PlayALONE</h1>
              <p id='isapassionate'> is a passionate indie game <br />
              development team dedicated to <br />
              crafting unique, story-driven <br />
              experiences</p>
            </div>
            <button className='text-3xl font-bold p-2 bg-highlight rounded-xl mt-10 w-50 cursor-pointer transition duration-400 ease-in-out hover:bg-highlight-hover '>
              <a href="https://www.facebook.com/profile.php?id=61579360801974">Follow us</a></button>
          </div>
        </div>
        <div className='flex flex-col w-full'></div>
      </Element>
      <Footer />
    </div>
  )
}

export default App
