import PropTypes from "prop-types";

const PlanetInfo = ({ planet, activeTab }) => {
  const getContent = () => {
    switch (activeTab) {
      case "structure":
        return planet.structure;
      case "geology":
        return planet.geology;
      case "overview":
      default:
        return planet.overview;
    }
  };

  const content = getContent();

  return (
    <div className="planet-info">
      <div className="text-center mb-8">
        <h2 className="text-white text-[80px] font-normal uppercase">
          {planet.name}
        </h2>
        <div className="relative mx-auto mb-4 w-[255px] h-[255px]">
          <img
            src={
              activeTab === "structure"
                ? planet.images.internal
                : activeTab === "geology"
                  ? planet.images.planet
                  : planet.images.planet
            }
            alt={`${planet.name} ${activeTab}`}
            className={`absolute inset-0 m-auto ${
              activeTab === "geology" ? "w-[250px] h-[250px]" : "w-full h-full"
            }`}
          />
          {activeTab === "geology" && (
            <img
              src={planet.images.geology}
              alt={`${planet.name} surface geology`}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-[90px] h-[100px]"
            />
          )}
        </div>
        <p className="description mb-4">{content.content}</p>
        <a
          href={content.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent"
        >
          Source: <span className="underline font-bold">Wikipedia</span>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-1 text-white font-normal uppercase px-[60px]">
        <div className="card p-4 relative w-[255px] h-[128px] flex flex-col justify-center items-center">
          <div className="absolute inset-0 border border-white opacity-20 pointer-events-none"></div>
          <h3 className="text-[11px] text-accent">Rotation Time</h3>
          <p className="text-[40px]">{planet.rotation}</p>
        </div>
        <div className="card p-4 relative w-[255px] h-[128px] flex flex-col justify-center items-left">
          <div className="absolute inset-0 border border-white opacity-20 pointer-events-none"></div>
          <h3 className="text-[11px] text-accent">Revolution Time</h3>
          <p className="text-[40px]">{planet.revolution}</p>
        </div>
        <div className="card p-4 relative w-[255px] h-[128px] flex flex-col justify-center items-left">
          <div className="absolute inset-0 border border-white opacity-20 pointer-events-none"></div>
          <h3 className="text-[11px] text-accent">Radius</h3>
          <p className="text-[40px]">{planet.radius}</p>
        </div>
        <div className="card p-4 relative w-[255px] h-[128px] flex flex-col justify-center items-left">
          <div className="absolute inset-0 border border-white opacity-20 pointer-events-none"></div>
          <h3 className="text-[11px] text-accent">Average Temp.</h3>
          <p className="text-[40px]">{planet.temperature}</p>
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
