import PropTypes from 'prop-types';

const PlanetInfo = ({ planet, activeTab }) => {
  const getContent = () => {
    switch (activeTab) {
      case 'structure':
        return planet.structure;
      case 'geology':
        return planet.geology;
      case 'overview':
      default:
        return planet.overview;
    }
  };

  const content = getContent();

  return (
    <div className="planet-info">
      <div className="text-center mb-8">
        <h2 className="text-white text-[80px] font-normal uppercase">{planet.name}</h2>
        <img
          src={
            activeTab === 'structure'
              ? planet.images.internal
              : activeTab === 'geology'
              ? planet.images.geology
              : planet.images.planet
          }
          alt={`${planet.name} ${activeTab}`}
          className="mx-auto mb-4"
        />
        <p className="description mb-4">{content.content}</p>
        <a href={content.source} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          Source
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 text-white text-[40px] font-normal uppercase">
        <div className="card p-4 bg-gray-800 rounded w-[255px] h-[128px] flex flex-col justify-center items-center">
          <h3 className="font-semibold">Rotation Time</h3>
          <p className="text-lg">{planet.rotation}</p>
        </div>
        <div className="card p-4 bg-gray-800 rounded w-[255px] h-[128px] flex flex-col justify-center items-center">
          <h3 className="font-semibold">Revolution Time</h3>
          <p className="text-lg">{planet.revolution}</p>
        </div>
        <div className="card p-4 bg-gray-800 rounded w-[255px] h-[128px] flex flex-col justify-center items-center">
          <h3 className="font-semibold">Radius</h3>
          <p className="text-lg">{planet.radius}</p>
        </div>
        <div className="card p-4 bg-gray-800 rounded w-[255px] h-[128px] flex flex-col justify-center items-center">
          <h3 className="font-semibold">Average Temperature</h3>
          <p className="text-lg">{planet.temperature}</p>
        </div>
      </div>
    </div>
  );
};

PlanetInfo.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      content: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    }).isRequired,
    structure: PropTypes.shape({
      content: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    }).isRequired,
    geology: PropTypes.shape({
      content: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    }).isRequired,
    rotation: PropTypes.string.isRequired,
    revolution: PropTypes.string.isRequired,
    radius: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    images: PropTypes.shape({
      planet: PropTypes.string.isRequired,
      internal: PropTypes.string.isRequired,
      geology: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default PlanetInfo;
