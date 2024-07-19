import Navbar from './Navbar';


function Header() {
    return (
        <header className="relative overflow-hidden flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Logo text */}
            <h1 className="text-white text-[28px] font-normal font-antonio">The Planets</h1>
          </div>
          <Navbar />
        </header>

       
    );
}

export default Header;