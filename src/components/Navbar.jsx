
function Navbar() {
  return (
    <nav className="text-accent">
      <ul className="flex justify-end space-x-4 text-14px font-bold leading-25px uppercase tracking-wide font-antonio">
        <li>
          <a href="/mercury" className="hover:text-white hover:font-bold">Mercury</a>
        </li>
        <li>
          <a href="/venus" className="hover:text-white hover:font-bold">Venus</a>
        </li>
        <li>
          <a href="/earth" className="hover:text-white hover:font-bold">Earth</a>
        </li>
        <li>
          <a href="/mars" className="hover:text-white hover:font-bold">Mars</a>
        </li>
        <li>
          <a href="/jupiter" className="hover:text-white hover:font-bold">Jupiter</a>
        </li>
        <li>
          <a href="/saturn" className="hover:text-white hover:font-bold">Saturn</a>
        </li>
        <li>
          <a href="/uranus" className="hover:text-white hover:font-bold">Uranus</a>
        </li>
        <li>
          <a href="/neptune" className="hover:text-white hover:font-bold">Neptune</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
