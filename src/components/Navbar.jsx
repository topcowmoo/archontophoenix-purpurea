import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="text-accent py-6 pr-6">
      <ul className="flex justify-end space-x-4 text-14px font-bold leading-25px uppercase tracking-wide">
        <li>
          <Link to="/planet/mercury" className="hover:text-white hover:font-bold">Mercury</Link>
        </li>
        <li>
          <Link to="/planet/venus" className="hover:text-white hover:font-bold">Venus</Link>
        </li>
        <li>
          <Link to="/planet/earth" className="hover:text-white hover:font-bold">Earth</Link>
        </li>
        <li>
          <Link to="/planet/mars" className="hover:text-white hover:font-bold">Mars</Link>
        </li>
        <li>
          <Link to="/planet/jupiter" className="hover:text-white hover:font-bold">Jupiter</Link>
        </li>
        <li>
          <Link to="/planet/saturn" className="hover:text-white hover:font-bold">Saturn</Link>
        </li>
        <li>
          <Link to="/planet/uranus" className="hover:text-white hover:font-bold">Uranus</Link>
        </li>
        <li>
          <Link to="/planet/neptune" className="hover:text-white hover:font-bold">Neptune</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
