interface VilleDetailProps {
    ville: string;
  }
  
  // Informations locales sur les villes
  const villesInfos: { [key: string]: any } = {
    douala: {
      nom: "Douala",
      pays: "Cameroun",
      population: "3 millions",
      description: "Douala est la capitale économique du Cameroun.",
      superficie: "210 km²",
    },
    maroua: {
      nom: "Maroua",
      pays: "Cameroun",
      population: "500 000",
      description: "Maroua est une ville du nord du Cameroun.",
      superficie: "180 km²",
    },
    garoua: {
      nom: "Garoua",
      pays: "Cameroun",
      population: "400 000",
      description: "Garoua est une ville située dans la région du Nord.",
      superficie: "150 km²",
    },
    yaounde: {
      nom: "Yaoundé",
      pays: "Cameroun",
      population: "2,8 millions",
      description: "Yaoundé est la capitale politique du Cameroun.",
      superficie: "180 km²",
    },
  };
  
  const VilleDetail = ({ ville }: VilleDetailProps) => {
    const villeInfo = villesInfos[ville.toLowerCase()];
  
    if (!villeInfo) {
      return <div className="alert alert-warning">Informations non disponibles pour cette ville.</div>;
    }
  
    return (
      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">{villeInfo.nom}</h2>
          <p className="card-text">Pays: {villeInfo.pays}</p>
          <p className="card-text">Population: {villeInfo.population}</p>
          <p className="card-text">Description: {villeInfo.description}</p>
          <p className="card-text">Superficie: {villeInfo.superficie}</p>
        </div>
      </div>
    );
  };
  
  export default VilleDetail;