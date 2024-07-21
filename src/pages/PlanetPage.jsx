import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlanetInfo from '../components/PlanetInfo';
import planetsData from '../data/planetsData';

const images = import.meta.glob('../assets/*.{svg,png}');

const PlanetPage = () => {
  const { planetName } = useParams();
  const planet = planetsData.find(p => p.name.toLowerCase() === planetName.toLowerCase());
  const [activeTab, setActiveTab] = useState('overview');
  const [planetImages, setPlanetImages] = useState(null);

  const planetColors = {
    mercury: "#419EBB",
    venus: "#EDA249",
    earth: "#6C2DD4",
    mars: "#D14C32",
    jupiter: "#D83A34",
    saturn: "#CD5120",
    uranus: "#1DC1A1",
    neptune: "#2D68F0",
  };

  const currentColor = planetColors[planetName?.toLowerCase()] || '#FFFFFF'; // Default to white if planet not found

  useEffect(() => {
    if (planet) {
      const loadImages = async (imagePaths) => {
        const loadedImages = {};
        for (const [key, value] of Object.entries(imagePaths)) {
          const image = await images[value]();
          loadedImages[key] = image.default;
        }
        return loadedImages;
      };

      loadImages(planet.images).then(setPlanetImages);
    }
  }, [planet]);

  if (!planet) {
    return <div className="text-white">Planet not found</div>;
  }

  if (!planetImages) {
    return <div className="text-white">Loading images...</div>;
  }

  return (
    <div className="planet-page text-white p-4">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-accent' : ''}`}
          style={{ backgroundColor: activeTab === 'overview' ? currentColor : '' }}
          onClick={() => setActiveTab('overview')}
        >
          1. Overview
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'structure' ? 'bg-accent' : ''}`}
          style={{ backgroundColor: activeTab === 'structure' ? currentColor : '' }}
          onClick={() => setActiveTab('structure')}
        >
          2. Internal Structure
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'geology' ? 'bg-accent' : ''}`}
          style={{ backgroundColor: activeTab === 'geology' ? currentColor : '' }}
          onClick={() => setActiveTab('geology')}
        >
          3. Surface Geology
        </button>
      </div>
      <PlanetInfo planet={{ ...planet, images: planetImages }} activeTab={activeTab} />
    </div>
  );
};

export default PlanetPage;
