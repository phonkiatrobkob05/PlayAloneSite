import { Link, Element } from 'react-scroll';

function Navbar () {
  return (
    <nav className="bg-black-figma p-4">
      <div className="container flex justify-between items-center font-bold text-2xl">
        <div className="text-white text-lg mr-0">
          <img src="public/playalonelogo.png" alt="" className="w-[50px] md:w-[250px]"/>
        </div>
        <ul className="flex space-x-4 text-white-figma">
          <li className='text-xl'>
            <Link to="Home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='text-xl'>
            <Link to="TaKhon" smooth={true} duration={500}>TaKhon</Link>
          </li>
          <li className='text-xl'>
            <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;