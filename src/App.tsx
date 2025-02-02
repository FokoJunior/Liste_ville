import Ville from "./components/Ville";

const villes = [
    "douala", "maroua", "garoua", "yaounde", 
    "bafoussam", "bamenda", "bertoua", "ebolowa",
    "nkongsamba", "kumba", "limbe", "dschang",
    "foumban", "kribi", "edea"
  ];
  

function App() {
  return (
    <>
      <Ville elements={villes} titre="Liste des villes du Cameroun" />
    </>
  );
}

export default App;