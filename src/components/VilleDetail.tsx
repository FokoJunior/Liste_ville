interface VilleDetailProps {
    ville: string;
  }
  
  // Informations locales sur les villes
  const villesInfos: { [key: string]: any } = {
    douala: {
      nom: "Douala",
      région: "Littoral",
      population: "3 millions",
      description: "Douala est la capitale économique du Cameroun et le principal port du pays.",
      superficie: "210 km²",
    },
    yaounde: {
      nom: "Yaoundé",
      région: "Centre",
      population: "2,8 millions",
      description: "Yaoundé est la capitale politique du Cameroun et abrite de nombreuses institutions gouvernementales.",
      superficie: "180 km²",
    },
    maroua: {
      nom: "Maroua",
      région: "Extrême-Nord",
      population: "500 000",
      description: "Maroua est une ville du nord du Cameroun, connue pour son marché artisanal et son parc national de Waza.",
      superficie: "180 km²",
    },
    garoua: {
      nom: "Garoua",
      région: "Nord",
      population: "400 000",
      description: "Garoua est une ville située dans la région du Nord, connue pour son industrie textile et son aéroport international.",
      superficie: "150 km²",
    },
    bafoussam: {
      nom: "Bafoussam",
      région: "Ouest",
      population: "300 000",
      description: "Bafoussam est la capitale de la région de l'Ouest et un important centre agricole.",
      superficie: "120 km²",
    },
    bamenda: {
      nom: "Bamenda",
      région: "Nord-Ouest",
      population: "500 000",
      description: "Bamenda est une ville dynamique de la région du Nord-Ouest, connue pour son paysage montagneux.",
      superficie: "200 km²",
    },
    bertoua: {
      nom: "Bertoua",
      région: "Est",
      population: "200 000",
      description: "Bertoua est la capitale de la région de l'Est et un centre important pour l'exploitation forestière.",
      superficie: "100 km²",
    },
    ebolowa: {
      nom: "Ebolowa",
      région: "Sud",
      population: "150 000",
      description: "Ebolowa est la capitale de la région du Sud et un centre agricole important.",
      superficie: "80 km²",
    },
    nkongsamba: {
      nom: "Nkongsamba",
      région: "Littoral",
      population: "120 000",
      description: "Nkongsamba est une ville située dans les montagnes de la région du Littoral.",
      superficie: "90 km²",
    },
    kumba: {
      nom: "Kumba",
      région: "Sud-Ouest",
      population: "400 000",
      description: "Kumba est une ville commerciale importante dans la région du Sud-Ouest.",
      superficie: "160 km²",
    },
    limbe: {
      nom: "Limbe",
      région: "Sud-Ouest",
      population: "100 000",
      description: "Limbe est une ville côtière connue pour ses plages et son parc botanique.",
      superficie: "70 km²",
    },
    dschang: {
      nom: "Dschang",
      région: "Ouest",
      population: "200 000",
      description: "Dschang est une ville universitaire située dans les hauts plateaux de l'Ouest.",
      superficie: "110 km²",
    },
    foumban: {
      nom: "Foumban",
      région: "Ouest",
      population: "150 000",
      description: "Foumban est une ville historique, connue pour son palais royal et son artisanat.",
      superficie: "100 km²",
    },
    kribi: {
      nom: "Kribi",
      région: "Sud",
      population: "80 000",
      description: "Kribi est une ville côtière populaire pour ses plages et ses chutes d'eau.",
      superficie: "60 km²",
    },
    edea: {
      nom: "Édéa",
      région: "Littoral",
      population: "200 000",
      description: "Édéa est une ville industrielle située sur le fleuve Sanaga.",
      superficie: "130 km²",
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
          <p className="card-text">Région: {villeInfo.région}</p>
          <p className="card-text">Population: {villeInfo.population}</p>
          <p className="card-text">Description: {villeInfo.description}</p>
          <p className="card-text">Superficie: {villeInfo.superficie}</p>
        </div>
      </div>
    );
  };
  
  export default VilleDetail;