import Navbar from './Navbar';


function Header() {
    return (
        <header className="relative overflow-hidden flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Logo text */}
            <h1 className="text-3xl text-black ml-4 font-antonio">The Planets</h1>
          </div>
          <Navbar />
        </header>

       
    );
}

export default Header;