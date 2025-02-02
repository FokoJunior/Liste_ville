import Ville from "./components/Ville";

const villes = ["douala", "maroua", "garoua", "yaounde"];

function App() {
  return (
    <>
      <Ville elements={villes} titre="Liste des villes du Cameroun" />
    </>
  );
}

export default App;