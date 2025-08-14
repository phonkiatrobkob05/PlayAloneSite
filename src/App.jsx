import './App.css'
import Navbar from './components/nav'
import Footer from './components/footer'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className='bg-[url(/bgplayalone.png)] h-screen w-screen bg-cover bg-center text-white'>
      <Navbar />
      <Element name="Home">
        <section className=''>
          <div className='flex flex-col justify-center h-full p-8 md:p-40'>
            <h1 className='text-3xl font-bold'>PlayALONE</h1>
            <p className='text-2xl'>is a passionate indie game 
            <p>development team dedicated to</p>
            <p>crafting unique, stoqry-driven</p>
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
