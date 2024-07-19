import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="text-white">
        <Link
          to="/PlanetPage"
          className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow no-underline focus:no-underline"
        >
          Explore The Planets
        </Link>
        </div>
    );
}

export default Home;