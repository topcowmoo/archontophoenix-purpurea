import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">The Planets</h1>
      <Link
        to="/planet/mercury"
        className="flex items-center justify-center w-[150px] h-12 border border-white text-accent font-bold py-2 px-4 square hover:bg-accent-dark hover:text-white">
        Click To Explore
      </Link>
    </div>
  );
}

export default Home;
