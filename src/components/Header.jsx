import Navbar from './Navbar';

function Header() {
    return (
        <header className="relative overflow-hidden flex justify-between items-center border-b border-white border-opacity-20 text-white pl-6 py-6">
            <div className="flex items-center">
                <h1 className="text-white text-[28px] font-normal font-antonio">The Planets</h1>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
